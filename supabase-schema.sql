-- Jalankan file ini di Supabase SQL Editor.
-- Database: PostgreSQL Supabase

create table if not exists public.site_profiles (
  id text primary key,
  content jsonb not null default '{}'::jsonb,
  updated_at timestamptz not null default now()
);

alter table public.site_profiles enable row level security;

drop policy if exists "Public can read published profile" on public.site_profiles;
create policy "Public can read published profile"
on public.site_profiles
for select
to anon
using (id = 'autolux');

drop policy if exists "Authenticated admin can publish profile content" on public.site_profiles;
drop policy if exists "Authenticated admin can insert profile content" on public.site_profiles;
drop policy if exists "Authenticated admin can update profile content" on public.site_profiles;
drop policy if exists "Authenticated admin can delete profile content" on public.site_profiles;

create policy "Authenticated admin can insert profile content"
on public.site_profiles
for insert
to authenticated
with check (
  id = 'autolux'
  and auth.jwt() ->> 'email' = 'admin@autolux.local'
);

create policy "Authenticated admin can update profile content"
on public.site_profiles
for update
to authenticated
using (
  id = 'autolux'
  and auth.jwt() ->> 'email' = 'admin@autolux.local'
)
with check (
  id = 'autolux'
  and auth.jwt() ->> 'email' = 'admin@autolux.local'
);

create policy "Authenticated admin can delete profile content"
on public.site_profiles
for delete
to authenticated
using (
  id = 'autolux'
  and auth.jwt() ->> 'email' = 'admin@autolux.local'
);

insert into public.site_profiles (id, content)
values ('autolux', '{}'::jsonb)
on conflict (id) do nothing;
