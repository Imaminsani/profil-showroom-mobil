const STORAGE_KEY = "autoluxProfileData";
const CONFIG_STORAGE_KEY = "autoluxSupabaseConfig";
const AUTH_STORAGE_KEY = "autoluxAdminAuthenticated";

const defaultProfile = {
  brand: {
    name: "AutoLux",
    suffix: "Motors",
    phone: "+62 812-1000-8899",
    hours: "Setiap hari 09.00 - 21.00",
    whatsapp: "6281210008899",
    email: "hello@autoluxmotors.id"
  },
  theme: {
    mode: "dark"
  },
  hero: {
    eyebrow: "Premium Car Showroom Profile",
    title: "Temukan Mobil Impian Anda Dengan Kualitas Terbaik",
    subtitle: "Showroom terpercaya dengan ratusan pilihan mobil berkualitas, bergaransi, legalitas jelas, dan proses pembelian yang transparan.",
    badge: "Cinematic showroom experience",
    primaryButton: "Lihat Koleksi",
    secondaryButton: "Hubungi Kami"
  },
  quickFeatures: [
    ["Inspeksi Menyeluruh", "Mesin, bodi, interior, kaki-kaki, dan dokumen diperiksa sebelum unit ditawarkan."],
    ["Laporan Digital", "Riwayat kendaraan, kilometer, pajak, dan status dokumen disampaikan terbuka."],
    ["Garansi Mesin", "Perlindungan hingga 1 tahun untuk unit tertentu dengan syarat yang jelas."],
    ["Kredit Mudah", "Simulasi cicilan cepat melalui partner pembiayaan resmi dan terpercaya."]
  ],
  about: {
    eyebrow: "Tentang AutoLux",
    title: "Showroom mobil premium dengan standar kurasi yang ketat.",
    paragraph1: "AutoLux Motors berdiri sejak 2016 dan melayani pembelian mobil baru maupun bekas berkualitas untuk pelanggan di Jabodetabek dan kota besar lainnya. Visi kami adalah menghadirkan pengalaman membeli mobil yang lebih meyakinkan: transparan, elegan, dan didukung layanan sales yang responsif.",
    paragraph2: "Misi kami sederhana: menyediakan unit terbaik, memberi informasi yang jujur, serta memastikan proses inspeksi, kredit, pembayaran, dan serah terima berjalan aman."
  },
  stats: [
    ["1000", "Mobil Terjual"],
    ["500", "Pelanggan Puas"],
    ["10", "Tahun Pengalaman"],
    ["50", "Mobil Ready Stock"]
  ],
  benefits: [
    ["Mobil Berkualitas", "Semua unit telah melalui inspeksi mekanis, visual, dan dokumen."],
    ["Harga Transparan", "Estimasi biaya disampaikan sejak awal tanpa biaya tersembunyi."],
    ["Garansi Mesin", "Garansi hingga 1 tahun untuk memberi rasa aman setelah pembelian."],
    ["Kredit Mudah", "Proses cepat, aman, dan dibantu sampai approval pembiayaan."]
  ],
  catalog: {
    eyebrow: "Katalog Mobil Unggulan",
    title: "Koleksi pilihan siap inspeksi dan test drive.",
    cars: [
      {
        name: "Toyota Fortuner VRZ",
        meta: "2022 - 28.000 km - Automatic",
        price: "Rp 520.000.000",
        engine: "Sangat baik",
        interior: "Terawat, jok original bersih",
        exterior: "Muluss, cat glossy",
        documents: "BPKB, STNK, faktur lengkap",
        description: "SUV keluarga premium dengan mesin responsif, kabin lega, dan kondisi siap pakai.",
        checks: ["Bebas banjir dan tabrakan besar", "Pajak aktif", "Kaki-kaki senyap"]
      },
      {
        name: "BMW X7 xDrive40i",
        meta: "2023 - 12.500 km - Automatic",
        price: "Rp 2.150.000.000",
        engine: "Prima, service record jelas",
        interior: "Luxury leather cabin",
        exterior: "Paint protection terawat",
        documents: "Dokumen lengkap dan valid",
        description: "Luxury SUV flagship dengan fitur lengkap, performa halus, dan kenyamanan kelas atas.",
        checks: ["Service record tersedia", "Elektrikal normal", "Ban kondisi tebal"]
      },
      {
        name: "Mercedes-Benz GLE",
        meta: "2021 - 31.000 km - Automatic",
        price: "Rp 1.375.000.000",
        engine: "Normal dan responsif",
        interior: "Bersih, fitur aktif",
        exterior: "Body rapi",
        documents: "STNK dan BPKB ready",
        description: "Unit SUV premium dengan kenyamanan tinggi dan karakter berkendara elegan.",
        checks: ["Suspensi nyaman", "AC dingin", "Dokumen siap proses"]
      },
      {
        name: "Hyundai IONIQ 5",
        meta: "2024 - 4.300 km - Electric",
        price: "Rp 735.000.000",
        engine: "Motor listrik normal",
        interior: "Modern dan bersih",
        exterior: "Sangat mulus",
        documents: "Dokumen lengkap",
        description: "Electric vehicle modern dengan jarak tempuh rendah, fitur futuristik, dan kondisi istimewa.",
        checks: ["Battery health baik", "Charging normal", "Kilometer rendah"]
      }
    ]
  },
  feature: {
    year: "2024",
    title: "AutoLux Signature Unit",
    description: "Unit pilihan dengan kondisi istimewa, performa terverifikasi, dan tampilan showroom-ready.",
    price: "Mulai Rp 520.000.000"
  },
  reviews: [
    ["Pelayanan sangat baik dan mobil sesuai ekspektasi. Semua dokumen dijelaskan dengan rapi.", "Andi"],
    ["Proses kredit cepat dan transparan. Sales responsif dari awal sampai serah terima.", "Budi"],
    ["Showroom rapi, unit terawat, dan test drive bisa dijadwalkan tanpa ribet.", "Rania"]
  ],
  process: [
    ["Pilih Mobil", "Pilih unit dari katalog atau minta rekomendasi sales."],
    ["Inspeksi Unit", "Cek kondisi, test drive, dan verifikasi dokumen."],
    ["Pembayaran/Kredit", "Cash, kredit, atau tukar tambah dengan simulasi transparan."],
    ["Serah Terima", "Unit disiapkan bersih, lengkap, dan siap digunakan."]
  ],
  partners: ["Bank Mandiri", "BCA", "BRI", "Adira Finance", "ACC"],
  contact: {
    address: "Jl. Premium Boulevard No. 88, Jakarta Selatan",
    mapQuery: "Jakarta Selatan"
  },
  faq: [
    ["Apakah bisa kredit?", "Bisa. Tim kami membantu simulasi cicilan dan pengajuan ke partner pembiayaan."],
    ["Apakah ada garansi?", "Unit tertentu memiliki garansi mesin hingga 1 tahun sesuai ketentuan."],
    ["Bisa tukar tambah?", "Bisa. Mobil lama Anda akan diinspeksi untuk menentukan estimasi harga terbaik."],
    ["Bisa cek unit sebelum beli?", "Bisa. Anda dapat menjadwalkan inspeksi langsung dan test drive."]
  ]
};

const form = document.querySelector("#adminForm");
const statusText = document.querySelector("#statusText");
const previewFrame = document.querySelector("#previewFrame");
const loginForm = document.querySelector("#loginForm");
const loginError = document.querySelector("#loginError");
const logoutBtn = document.querySelector("#logoutBtn");

const clone = (value) => JSON.parse(JSON.stringify(value));

const getProfile = () => {
  try {
    return deepMerge(clone(defaultProfile), JSON.parse(localStorage.getItem(STORAGE_KEY) || "{}"));
  } catch {
    return clone(defaultProfile);
  }
};

const getSupabaseSettings = () => {
  const fileConfig = window.AUTOLUX_SUPABASE || {};
  let localConfig = {};

  try {
    localConfig = JSON.parse(localStorage.getItem(CONFIG_STORAGE_KEY) || "{}");
  } catch {
    localConfig = {};
  }

  return { ...fileConfig, ...localConfig };
};

const saveSupabaseSettings = (data) => {
  localStorage.setItem(CONFIG_STORAGE_KEY, JSON.stringify(data));
};

const isSupabaseReady = () => {
  const settings = getSupabaseSettings();
  return Boolean(
    window.supabase &&
    settings.url &&
    settings.anonKey &&
    !settings.url.includes("YOUR_PROJECT_REF") &&
    !settings.anonKey.includes("YOUR_SUPABASE_ANON_KEY")
  );
};

const getSupabaseClient = () => {
  if (!isSupabaseReady()) return null;
  const settings = getSupabaseSettings();
  return window.supabase.createClient(settings.url, settings.anonKey);
};

const getAdminAuth = () => {
  const settings = getSupabaseSettings();
  return {
    username: settings.admin?.username || "admin@autolux.local",
    password: settings.admin?.password || "AutoLux@2026"
  };
};

const unlockAdmin = () => {
  document.body.classList.remove("auth-locked");
  document.body.classList.add("auth-ready");
};

const lockAdmin = () => {
  document.body.classList.add("auth-locked");
  document.body.classList.remove("auth-ready");
};

if (sessionStorage.getItem(AUTH_STORAGE_KEY) === "true") {
  unlockAdmin();
}

loginForm.addEventListener("submit", async (event) => {
  event.preventDefault();
  const auth = getAdminAuth();
  const username = document.querySelector("#adminUsername").value.trim();
  const password = document.querySelector("#adminPassword").value;

  const client = getSupabaseClient();
  if (client && username.includes("@")) {
    const { error } = await client.auth.signInWithPassword({
      email: username,
      password
    });

    if (!error) {
      sessionStorage.setItem(AUTH_STORAGE_KEY, "true");
      loginError.textContent = "";
      unlockAdmin();
      return;
    }
  }

  if (!client && username === auth.username && password === auth.password) {
    sessionStorage.setItem(AUTH_STORAGE_KEY, "true");
    loginError.textContent = "";
    unlockAdmin();
    return;
  }

  loginError.textContent = "ID admin atau password salah.";
});

logoutBtn.addEventListener("click", () => {
  sessionStorage.removeItem(AUTH_STORAGE_KEY);
  const client = getSupabaseClient();
  if (client) client.auth.signOut();
  lockAdmin();
});

const deepMerge = (target, source) => {
  if (!source || typeof source !== "object") return target;
  Object.keys(source).forEach((key) => {
    if (Array.isArray(source[key])) {
      target[key] = source[key];
    } else if (source[key] && typeof source[key] === "object") {
      target[key] = deepMerge(target[key] || {}, source[key]);
    } else {
      target[key] = source[key];
    }
  });
  return target;
};

const field = (path, label, value, type = "text", full = false) => {
  const safeValue = String(value ?? "").replace(/"/g, "&quot;");
  if (type === "textarea") {
    return `<div class="field ${full ? "full" : ""}">
      <label for="${path}">${label}</label>
      <textarea id="${path}" data-path="${path}">${value ?? ""}</textarea>
    </div>`;
  }

  return `<div class="field ${full ? "full" : ""}">
    <label for="${path}">${label}</label>
    <input id="${path}" data-path="${path}" type="${type}" value="${safeValue}">
  </div>`;
};

const selectField = (path, label, value, options, full = false) => `
  <div class="field ${full ? "full" : ""}">
    <label for="${path}">${label}</label>
    <select id="${path}" data-path="${path}">
      ${options.map((item) => `<option value="${item.value}" ${item.value === value ? "selected" : ""}>${item.label}</option>`).join("")}
    </select>
  </div>`;

const panel = (id, title, body) => `<section class="panel" id="${id}">
  <div class="panel-header"><h2>${title}</h2></div>
  <div class="panel-body">${body}</div>
</section>`;

const pairEditor = (path, title, item, firstLabel = "Judul", secondLabel = "Deskripsi") => `
  <div class="array-item">
    <div class="array-title">${title}</div>
    ${field(`${path}.0`, firstLabel, item[0])}
    ${field(`${path}.1`, secondLabel, item[1], "textarea", true)}
  </div>`;

const normalizeCar = (item) => {
  if (Array.isArray(item)) {
    return {
      name: item[0],
      meta: item[1],
      price: item[2],
      engine: item[3] || "Sangat baik",
      interior: item[4] || "Terawat",
      exterior: item[5] || "Muluss",
      documents: item[6] || "Lengkap",
      description: item[7] || "Unit telah melewati inspeksi showroom dan siap test drive.",
      checks: Array.isArray(item[8]) ? item[8] : ["Bebas banjir dan tabrakan besar", "Dokumen lengkap", "Siap test drive"]
    };
  }

  return {
    name: item?.name || "",
    meta: item?.meta || "",
    price: item?.price || "",
    engine: item?.engine || "Sangat baik",
    interior: item?.interior || "Terawat",
    exterior: item?.exterior || "Muluss",
    documents: item?.documents || "Lengkap",
    description: item?.description || "Unit telah melewati inspeksi showroom dan siap test drive.",
    checks: Array.isArray(item?.checks) ? item.checks : ["Bebas banjir dan tabrakan besar", "Dokumen lengkap", "Siap test drive"]
  };
};

const carEditor = (path, title, item) => `
  <div class="array-item">
    <div class="array-title">${title}</div>
    ${field(`${path}.name`, "Nama Mobil", item.name)}
    ${field(`${path}.meta`, "Detail Tahun/KM/Transmisi", item.meta)}
    ${field(`${path}.price`, "Harga", item.price)}
    ${field(`${path}.engine`, "Kondisi Mesin", item.engine)}
    ${field(`${path}.interior`, "Kondisi Interior", item.interior)}
    ${field(`${path}.exterior`, "Kondisi Eksterior", item.exterior)}
    ${field(`${path}.documents`, "Dokumen", item.documents)}
    ${field(`${path}.description`, "Deskripsi Keadaan Unit", item.description, "textarea", true)}
    ${field(`${path}.checksText`, "Checklist Unit (pisahkan per baris)", item.checks.join("\n"), "textarea", true)}
  </div>`;

const render = () => {
  const data = getProfile();
  const settings = getSupabaseSettings();

  form.innerHTML = [
    panel("database", "Database Supabase",
      `<div class="setup-card">
        <div>
          <span class="setup-kicker">PostgreSQL Supabase</span>
          <h3>${isSupabaseReady() ? "Database siap dipakai" : "Masukkan kredensial Supabase"}</h3>
          <p>Jalankan <code>supabase-schema.sql</code>, buat user admin di Supabase Auth, lalu isi Project URL dan anon key.</p>
        </div>
        <div class="connection-pill ${isSupabaseReady() ? "online" : ""}">${isSupabaseReady() ? "Connected" : "Setup Required"}</div>
      </div>
      <div class="field-grid">
        ${field("supabase.url", "Supabase Project URL", settings.url || "")}
        ${field("supabase.anonKey", "Supabase Anon Key", settings.anonKey || "", "textarea", true)}
        ${field("supabase.table", "Nama Tabel", settings.table || "site_profiles")}
        ${field("supabase.profileId", "Profile ID", settings.profileId || "autolux")}
        ${field("supabase.admin.username", "ID Admin / Email Supabase Auth", settings.admin?.username || "admin@autolux.local")}
        ${field("supabase.admin.password", "Password Admin", settings.admin?.password || "AutoLux@2026")}
      </div>
      <div class="inline-actions">
        <button class="secondary" id="saveConnectionBtn" type="button">Simpan Koneksi</button>
        <button class="secondary" id="loadDbBtn" type="button">Load dari Supabase</button>
        <button class="secondary" id="testDbBtn" type="button">Test Koneksi</button>
      </div>`),
    panel("brand", "Brand & Kontak",
      `<div class="field-grid">
        ${field("brand.name", "Nama Brand", data.brand.name)}
        ${field("brand.suffix", "Label Brand", data.brand.suffix)}
        ${field("brand.phone", "Nomor Telepon", data.brand.phone)}
        ${field("brand.whatsapp", "Nomor WhatsApp Link", data.brand.whatsapp)}
        ${field("brand.hours", "Jam Operasional", data.brand.hours)}
        ${field("brand.email", "Email", data.brand.email)}
      </div>`),
    panel("display", "Mode Tampilan",
      `<div class="field-grid">
        ${selectField("theme.mode", "Mode Website Publish", data.theme.mode || "dark", [
          { value: "dark", label: "Mode Gelap Premium" },
          { value: "light", label: "Mode Terang Premium" }
        ], true)}
      </div>`),
    panel("hero", "Hero Section",
      `<div class="field-grid">
        ${field("hero.eyebrow", "Eyebrow", data.hero.eyebrow)}
        ${field("hero.badge", "Badge Video", data.hero.badge)}
        ${field("hero.title", "Headline", data.hero.title, "textarea", true)}
        ${field("hero.subtitle", "Subheadline", data.hero.subtitle, "textarea", true)}
        ${field("hero.primaryButton", "Tombol Utama", data.hero.primaryButton)}
        ${field("hero.secondaryButton", "Tombol WhatsApp", data.hero.secondaryButton)}
      </div>`),
    panel("quick", "Keunggulan Cepat Hero",
      data.quickFeatures.map((item, index) => pairEditor(`quickFeatures.${index}`, `Fitur ${index + 1}`, item)).join("")),
    panel("about", "Tentang Kami",
      `<div class="field-grid">
        ${field("about.eyebrow", "Eyebrow", data.about.eyebrow)}
        ${field("about.title", "Judul", data.about.title, "textarea", true)}
        ${field("about.paragraph1", "Paragraf 1", data.about.paragraph1, "textarea", true)}
        ${field("about.paragraph2", "Paragraf 2", data.about.paragraph2, "textarea", true)}
      </div>`),
    panel("stats", "Statistik",
      data.stats.map((item, index) => `
        <div class="array-item">
          <div class="array-title">Statistik ${index + 1}</div>
          ${field(`stats.${index}.0`, "Angka", item[0])}
          ${field(`stats.${index}.1`, "Label", item[1])}
        </div>`).join("")),
    panel("benefits", "Keunggulan Showroom",
      data.benefits.map((item, index) => pairEditor(`benefits.${index}`, `Keunggulan ${index + 1}`, item)).join("")),
    panel("catalog", "Katalog Mobil",
      `<div class="field-grid">
        ${field("catalog.eyebrow", "Eyebrow", data.catalog.eyebrow)}
        ${field("catalog.title", "Judul", data.catalog.title, "textarea", true)}
      </div>
      ${data.catalog.cars.map((item, index) => carEditor(`catalog.cars.${index}`, `Mobil ${index + 1}`, normalizeCar(item))).join("")}`),
    panel("feature", "Signature Unit",
      `<div class="field-grid">
        ${field("feature.year", "Tahun", data.feature.year)}
        ${field("feature.price", "Harga CTA", data.feature.price)}
        ${field("feature.title", "Judul", data.feature.title, "textarea", true)}
        ${field("feature.description", "Deskripsi", data.feature.description, "textarea", true)}
      </div>`),
    panel("reviews", "Testimoni",
      data.reviews.map((item, index) => pairEditor(`reviews.${index}`, `Testimoni ${index + 1}`, item, "Isi Review", "Nama Pelanggan")).join("")),
    panel("process", "Proses Pembelian",
      data.process.map((item, index) => pairEditor(`process.${index}`, `Step ${index + 1}`, item)).join("")),
    panel("partners", "Partner Pembiayaan",
      `<div class="field-grid">${data.partners.map((item, index) => field(`partners.${index}`, `Partner ${index + 1}`, item)).join("")}</div>`),
    panel("contact", "Lokasi & Maps",
      `<div class="field-grid">
        ${field("contact.address", "Alamat", data.contact.address, "textarea", true)}
        ${field("contact.mapQuery", "Query Google Maps", data.contact.mapQuery)}
      </div>`),
    panel("faq", "FAQ",
      data.faq.map((item, index) => pairEditor(`faq.${index}`, `FAQ ${index + 1}`, item, "Pertanyaan", "Jawaban")).join(""))
  ].join("");
};

const setByPath = (target, path, value) => {
  const keys = path.split(".");
  let cursor = target;
  keys.slice(0, -1).forEach((key) => {
    cursor = cursor[key];
  });
  cursor[keys.at(-1)] = value;
};

const readForm = () => {
  const data = getProfile();
  data.catalog.cars = data.catalog.cars.map(normalizeCar);
  form.querySelectorAll("[data-path]:not([data-path^='supabase.'])").forEach((input) => {
    if (input.dataset.path.endsWith(".checksText")) {
      setByPath(data, input.dataset.path.replace(".checksText", ".checks"), input.value.split("\n").map((item) => item.trim()).filter(Boolean));
      return;
    }
    setByPath(data, input.dataset.path, input.value);
  });
  return data;
};

const readConnectionForm = () => {
  const current = getSupabaseSettings();
  form.querySelectorAll("[data-path^='supabase.']").forEach((input) => {
    const cleanPath = input.dataset.path.replace("supabase.", "");
    if (cleanPath.startsWith("admin.")) {
      current.admin = current.admin || {};
      current.admin[cleanPath.replace("admin.", "")] = input.value.trim();
      return;
    }
    current[cleanPath] = input.value.trim();
  });
  return current;
};

const saveConnection = () => {
  saveSupabaseSettings(readConnectionForm());
  render();
  statusText.textContent = "Koneksi Supabase disimpan di browser. Untuk publish online, isi nilai yang sama di supabase-config.js.";
};

const save = async () => {
  const data = readForm();
  localStorage.setItem(STORAGE_KEY, JSON.stringify(data));
  saveSupabaseSettings(readConnectionForm());

  const client = getSupabaseClient();
  const settings = getSupabaseSettings();

  if (!client) {
    statusText.textContent = "Supabase belum siap. Data tersimpan lokal dulu, isi Project URL dan anon key.";
    previewFrame.contentWindow.location.reload();
    return;
  }

  const { error } = await client
    .from(settings.table || "site_profiles")
    .upsert({
      id: settings.profileId || "autolux",
      content: data,
      updated_at: new Date().toISOString()
    }, { onConflict: "id" });

  if (error) {
    statusText.textContent = `Gagal simpan ke Supabase: ${error.message}`;
    return;
  }

  statusText.textContent = `Tersimpan ke Supabase ${new Date().toLocaleTimeString("id-ID")}.`;
  previewFrame.contentWindow.location.reload();
};

document.querySelector("#saveBtn").addEventListener("click", save);
document.querySelector("#refreshPreviewBtn").addEventListener("click", () => previewFrame.contentWindow.location.reload());
form.addEventListener("click", (event) => {
  if (event.target.id === "saveConnectionBtn") {
    saveConnection();
  }

  if (event.target.id === "loadDbBtn") {
    loadServerContent(true);
  }

  if (event.target.id === "testDbBtn") {
    testConnection();
  }
});

document.querySelector("#resetBtn").addEventListener("click", () => {
  if (!confirm("Reset semua konten admin ke default?")) return;
  localStorage.removeItem(STORAGE_KEY);
  render();
  fetch("api.php", {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: "{}"
  }).finally(() => {
    previewFrame.contentWindow.location.reload();
    statusText.textContent = "Konten sudah direset ke default.";
  });
});

document.querySelector("#exportBtn").addEventListener("click", () => {
  const blob = new Blob([JSON.stringify(readForm(), null, 2)], { type: "application/json" });
  const link = document.createElement("a");
  link.href = URL.createObjectURL(blob);
  link.download = "autolux-profile-content.json";
  link.click();
  URL.revokeObjectURL(link.href);
});

document.querySelector("#importInput").addEventListener("change", (event) => {
  const file = event.target.files[0];
  if (!file) return;

  const reader = new FileReader();
  reader.onload = () => {
    try {
      const data = deepMerge(clone(defaultProfile), JSON.parse(reader.result));
      localStorage.setItem(STORAGE_KEY, JSON.stringify(data));
      render();
      previewFrame.contentWindow.location.reload();
      statusText.textContent = "File JSON berhasil diimport.";
    } catch {
      statusText.textContent = "Import gagal. Pastikan file JSON valid.";
    }
  };
  reader.readAsText(file);
});

const loadServerContent = async (showStatus = false) => {
  const client = getSupabaseClient();
  const settings = getSupabaseSettings();

  if (client) {
    const { data, error } = await client
      .from(settings.table || "site_profiles")
      .select("content")
      .eq("id", settings.profileId || "autolux")
      .maybeSingle();

    if (!error && data?.content && Object.keys(data.content).length) {
      localStorage.setItem(STORAGE_KEY, JSON.stringify(data.content));
      render();
      previewFrame.contentWindow.location.reload();
      statusText.textContent = "Konten berhasil dimuat dari Supabase.";
      return;
    }

    if (showStatus) {
      statusText.textContent = error ? `Gagal load Supabase: ${error.message}` : "Data Supabase masih kosong.";
    }
    return;
  }

  fetch(`content.json?time=${Date.now()}`, { cache: "no-store" })
    .then((response) => response.ok ? response.json() : {})
    .then((data) => {
      if (!data || !Object.keys(data).length) return;
      localStorage.setItem(STORAGE_KEY, JSON.stringify(data));
      render();
      statusText.textContent = "Konten publish berhasil dimuat dari content.json.";
    })
    .catch(() => {});
};

const testConnection = async () => {
  saveSupabaseSettings(readConnectionForm());
  const client = getSupabaseClient();
  const settings = getSupabaseSettings();

  if (!client) {
    statusText.textContent = "Koneksi belum lengkap. Isi Project URL dan anon key Supabase.";
    render();
    return;
  }

  const { error } = await client
    .from(settings.table || "site_profiles")
    .select("id")
    .limit(1);

  statusText.textContent = error ? `Koneksi gagal: ${error.message}` : "Koneksi Supabase berhasil.";
  render();
};

render();
loadServerContent();
