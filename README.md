# AutoLux Motors

Website company profile showroom mobil premium dengan halaman publish, dashboard admin, integrasi Supabase, login admin, katalog unit, detail kondisi unit, maps, WhatsApp, dan mode gelap/terang.

## Halaman

- Publish: `index.html`
- Admin: `admin.html`

## Supabase

1. Jalankan `supabase-schema.sql` di Supabase SQL Editor.
2. Isi `supabase-config.js` dengan Project URL dan anon public key.
3. Buat user admin di Supabase Auth sesuai konfigurasi.
4. Buka admin, login, lalu klik Simpan Publish.

## Local Server

Jalankan dari folder project:

```bash
php -S 127.0.0.1:8000 -t .
```

Lalu buka:

```text
http://127.0.0.1:8000/index.html
http://127.0.0.1:8000/admin.html
```
