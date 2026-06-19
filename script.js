const revealItems = document.querySelectorAll(".section-reveal");
const counters = document.querySelectorAll("[data-counter]");
const compare = document.querySelector(".compare");
const compareRange = document.querySelector(".compare-range");
const STORAGE_KEY = "autoluxProfileData";
const CONFIG_STORAGE_KEY = "autoluxSupabaseConfig";
const THEME_OVERRIDE_KEY = "autoluxThemeMode";

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

const getProfile = () => {
  try {
    return deepMerge(JSON.parse(JSON.stringify(defaultProfile)), JSON.parse(localStorage.getItem(STORAGE_KEY) || "{}"));
  } catch {
    return defaultProfile;
  }
};

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

const setText = (selector, value) => {
  const element = document.querySelector(selector);
  if (element && value !== undefined) element.textContent = value;
};

const setHref = (selector, value) => {
  const element = document.querySelector(selector);
  if (element && value) element.href = value;
};

const setList = (selector, items, renderer) => {
  const container = document.querySelector(selector);
  if (!container || !Array.isArray(items)) return;
  container.innerHTML = items.map(renderer).join("");
};

const applyThemeMode = (mode) => {
  document.body.classList.toggle("light-mode", mode === "light");
  const toggle = document.querySelector("#themeToggle");
  if (toggle) {
    toggle.textContent = mode === "light" ? "Dark" : "Light";
    toggle.setAttribute("aria-label", mode === "light" ? "Aktifkan mode gelap" : "Aktifkan mode terang");
  }
};

const escapeHtml = (value) => String(value ?? "").replace(/[&<>"']/g, (char) => ({
  "&": "&amp;",
  "<": "&lt;",
  ">": "&gt;",
  '"': "&quot;",
  "'": "&#039;"
}[char]));

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
      checks: item[8] || ["Bebas banjir dan tabrakan besar", "Dokumen lengkap", "Siap test drive"]
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

const getCars = () => getProfile().catalog.cars.map(normalizeCar);

const applyProfile = () => {
  const data = getProfile();
  const waLink = `https://wa.me/${data.brand.whatsapp}`;

  const visitorMode = localStorage.getItem(THEME_OVERRIDE_KEY);
  applyThemeMode(visitorMode || data.theme.mode || "dark");

  setText(".brand strong", data.brand.name);
  document.querySelectorAll(".brand strong").forEach((item) => item.textContent = data.brand.name);
  document.querySelectorAll(".brand small").forEach((item) => item.textContent = data.brand.suffix);
  setText(".header-contact span", data.brand.phone);
  setText(".header-contact small", data.brand.hours);
  setHref(".header-contact", `tel:${data.brand.phone.replace(/\D/g, "")}`);

  setText(".hero .eyebrow", data.hero.eyebrow);
  setText(".hero h1", data.hero.title);
  setText(".hero-copy", data.hero.subtitle);
  setText(".video-badge", data.hero.badge);
  setText(".hero-actions .primary", `${data.hero.primaryButton} ->`);
  setText(".hero-actions .ghost", `${data.hero.secondaryButton} ->`);
  setHref(".hero-actions .ghost", waLink);
  setHref(".floating-wa", waLink);

  document.querySelectorAll(".hero-feature-grid article").forEach((card, index) => {
    const item = data.quickFeatures[index];
    if (!item) return;
    card.querySelector("h3").textContent = item[0];
    card.querySelector("p").textContent = item[1];
  });

  setText("#about .eyebrow", data.about.eyebrow);
  setText("#about h2", data.about.title);
  const aboutParagraphs = document.querySelectorAll("#about .prose p");
  if (aboutParagraphs[0]) aboutParagraphs[0].textContent = data.about.paragraph1;
  if (aboutParagraphs[1]) aboutParagraphs[1].textContent = data.about.paragraph2;

  document.querySelectorAll(".stats article").forEach((card, index) => {
    const item = data.stats[index];
    if (!item) return;
    const number = card.querySelector("strong");
    number.dataset.counter = item[0];
    number.textContent = "0";
    card.querySelector("span").textContent = item[1];
  });

  document.querySelectorAll(".benefit-grid article").forEach((card, index) => {
    const item = data.benefits[index];
    if (!item) return;
    card.querySelector("h3").textContent = item[0];
    card.querySelector("p").textContent = item[1];
  });

  setText("#catalog .eyebrow", data.catalog.eyebrow);
  setText("#catalog h2", data.catalog.title);
  setText(".catalog-show-all", "Lihat semua model ->");
  document.querySelectorAll(".car-card").forEach((card, index) => {
    const item = normalizeCar(data.catalog.cars[index]);
    if (!item) return;
    card.querySelector("h3").textContent = item.name;
    card.querySelector("p").textContent = item.meta;
    card.querySelector("strong").textContent = item.price;
    card.querySelector(".detail-btn").dataset.carIndex = index;
    card.querySelectorAll("a").forEach((link) => {
      if (link.textContent === "WhatsApp") link.href = waLink;
    });
  });

  setText(".feature-detail .year", data.feature.year);
  setText(".feature-detail h2", data.feature.title);
  setText(".feature-detail p", data.feature.description);
  setText(".price-row > strong", data.feature.price);
  setHref(".price-row .btn", waLink);

  document.querySelectorAll(".review-grid article").forEach((card, index) => {
    const item = data.reviews[index];
    if (!item) return;
    card.querySelector("p").textContent = `"${item[0]}"`;
    card.querySelector("strong").textContent = item[1];
  });

  document.querySelectorAll(".process-grid article").forEach((card, index) => {
    const item = data.process[index];
    if (!item) return;
    card.querySelector("h3").textContent = item[0];
    card.querySelector("p").textContent = item[1];
  });

  setList(".partners", data.partners, (item) => `<span>${escapeHtml(item)}</span>`);

  const contactItems = document.querySelectorAll(".contact-list li");
  const mapQuery = data.contact.mapQuery || data.contact.address;
  const mapSearchUrl = `https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(mapQuery)}`;
  if (contactItems[0]) contactItems[0].textContent = data.contact.address;
  if (contactItems[1]) contactItems[1].textContent = data.brand.hours;
  if (contactItems[2]) contactItems[2].textContent = `WhatsApp: ${data.brand.phone}`;
  if (contactItems[3]) contactItems[3].textContent = `Email: ${data.brand.email}`;
  const map = document.querySelector("iframe");
  if (map) map.src = `https://www.google.com/maps?q=${encodeURIComponent(mapQuery)}&output=embed`;
  setHref(".map-link", mapSearchUrl);
  setHref(".contact-wa-link", waLink);

  setList(".faq-list", data.faq, (item) => `
    <details>
      <summary>${escapeHtml(item[0])}</summary>
      <p>${escapeHtml(item[1])}</p>
    </details>
  `);

  document.querySelectorAll('a[href^="https://wa.me"]').forEach((link) => {
    link.href = waLink;
  });
};

applyProfile();

const loadPublishedProfile = async () => {
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
      applyProfile();
      return;
    }
  }

  fetch(`content.json?time=${Date.now()}`, { cache: "no-store" })
    .then((response) => response.ok ? response.json() : {})
    .then((data) => {
      if (data && Object.keys(data).length) {
        localStorage.setItem(STORAGE_KEY, JSON.stringify(data));
        applyProfile();
      }
    })
    .catch(() => {});
};

loadPublishedProfile();

document.querySelector("#themeToggle")?.addEventListener("click", () => {
  const nextMode = document.body.classList.contains("light-mode") ? "dark" : "light";
  localStorage.setItem(THEME_OVERRIDE_KEY, nextMode);
  applyThemeMode(nextMode);
});

const revealObserver = new IntersectionObserver((entries) => {
  entries.forEach((entry) => {
    if (entry.isIntersecting) {
      entry.target.classList.add("visible");
      revealObserver.unobserve(entry.target);
    }
  });
}, { threshold: 0.14 });

revealItems.forEach((item) => revealObserver.observe(item));

const countObserver = new IntersectionObserver((entries) => {
  entries.forEach((entry) => {
    if (!entry.isIntersecting) return;

    const element = entry.target;
    const target = Number(element.dataset.counter);
    const duration = 1200;
    const start = performance.now();

    const tick = (now) => {
      const progress = Math.min((now - start) / duration, 1);
      const eased = 1 - Math.pow(1 - progress, 3);
      element.textContent = Math.floor(eased * target).toLocaleString("id-ID");

      if (progress < 1) requestAnimationFrame(tick);
    };

    requestAnimationFrame(tick);
    countObserver.unobserve(element);
  });
}, { threshold: 0.65 });

counters.forEach((counter) => countObserver.observe(counter));

if (compare && compareRange) {
  compareRange.addEventListener("input", () => {
    compare.style.setProperty("--position", `${compareRange.value}%`);
  });
}

const modal = document.querySelector("#unitModal");
const openUnitModal = (index) => {
  const car = getCars()[index];
  if (!modal || !car) return;
  const waLink = `https://wa.me/${getProfile().brand.whatsapp}?text=${encodeURIComponent(`Halo AutoLux, saya ingin tanya detail unit ${car.name}.`)}`;

  modal.querySelector("#unitModalTitle").textContent = car.name;
  modal.querySelector(".unit-modal-meta").textContent = car.meta;
  modal.querySelector(".unit-modal-price").textContent = car.price;
  modal.querySelector("[data-unit-field='engine']").textContent = car.engine;
  modal.querySelector("[data-unit-field='interior']").textContent = car.interior;
  modal.querySelector("[data-unit-field='exterior']").textContent = car.exterior;
  modal.querySelector("[data-unit-field='documents']").textContent = car.documents;
  modal.querySelector(".unit-modal-description").textContent = car.description;
  modal.querySelector(".unit-check-list").innerHTML = car.checks.map((item) => `<li>${escapeHtml(item)}</li>`).join("");
  modal.querySelector(".unit-wa-link").href = waLink;
  modal.classList.add("open");
  modal.setAttribute("aria-hidden", "false");
  document.body.classList.add("modal-open");
};

const closeUnitModal = () => {
  if (!modal) return;
  modal.classList.remove("open");
  modal.setAttribute("aria-hidden", "true");
  document.body.classList.remove("modal-open");
};

document.addEventListener("click", (event) => {
  if (event.target.closest(".catalog-show-all")) {
    const catalog = document.querySelector("#catalog");
    document.querySelectorAll(".car-card").forEach((card) => card.classList.remove("is-hidden"));
    catalog?.classList.add("catalog-focus");
    catalog?.scrollIntoView({ behavior: "smooth", block: "start" });
    window.setTimeout(() => catalog?.classList.remove("catalog-focus"), 1400);
  }

  const detailButton = event.target.closest(".detail-btn");
  if (detailButton) {
    openUnitModal(Number(detailButton.dataset.carIndex || 0));
  }

  if (event.target.closest("[data-close-modal]")) {
    closeUnitModal();
  }
});

document.addEventListener("keydown", (event) => {
  if (event.key === "Escape") closeUnitModal();
});
