// Ubah data di bawah ini, lalu simpan. Seluruh halaman ikut berubah.
const DATA = {
    nama: "Fadhlan Kahirul Anam",
    wa: "0858-8201-6798",              // nomor WhatsApp, boleh format apa saja, contoh: 0812-3456-7890
    waTampil: "0858-8201-6798",        // tampilan nomor, contoh: 0812-3456-7890
    email: "lanzz253vii7@gmail.com",           // contoh: nama@email.com
    revisi: "2-3",
    hargaBasic: "Rp 15.000",      // contoh: Rp 300.000
    hargaStandar: "Rp 20.000-35.000",    // contoh: Rp 750.000
    domain: "sudah termasuk"           // contoh: sudah termasuk
  };
  
  // Isi teks otomatis (kolom yang masih kosong tetap memakai teks bawaan)
  document.querySelectorAll("[data-fill]").forEach(function (el) {
    var v = DATA[el.dataset.fill];
    if (v) el.textContent = v;
  });
  
  // Tautan WhatsApp
  // Nomor ditulis bebas (0812-3456-7890, +62 812 3456 7890, dll). Otomatis dirapikan jadi 62...
  function rapikanNomor(n) {
    var d = String(n).replace(/\D/g, "");      // buang semua selain angka
    if (d.indexOf("0") === 0) d = "62" + d.slice(1);   // 0812... menjadi 62812...
    else if (d.indexOf("8") === 0) d = "62" + d;       // 812... menjadi 62812...
    return d;
  }
  var nomorWa = rapikanNomor(DATA.wa);
  if (nomorWa) {
    var pesan = encodeURIComponent("Halo, saya ingin bertanya tentang pembuatan website.");
    document.querySelectorAll("[data-wa]").forEach(function (a) {
      a.href = "https://wa.me/" + nomorWa + "?text=" + pesan;
      a.target = "_blank"; a.rel = "noopener";
    });
  } else {
    console.warn("Nomor WhatsApp belum diisi: isi kolom wa di script.js");
  }
  if (DATA.email) document.querySelector('[data-fill="email"]').href = "mailto:" + DATA.email;
  if (DATA.instagram) {
    var ig = document.querySelector('[data-fill="instagram"]');
    ig.href = "https://instagram.com/" + DATA.instagram.replace("@", "");
    ig.target = "_blank"; ig.rel = "noopener";
  }
  
  // Foto: tampilkan pengganti jika foto-saya.jpg belum ada
  var img = document.querySelector("#frame img");
  var frame = document.getElementById("frame");
  img.addEventListener("error", function () { frame.classList.add("no-photo"); });
  if (img.complete && img.naturalWidth === 0) frame.classList.add("no-photo");
  
  document.getElementById("tahun").textContent = new Date().getFullYear();