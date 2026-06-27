// ===============================
// DATA ANGGOTA KELUARGA
// ===============================

const keluarga = [
    {
        id: 1,
        nama: "Mansyur T",
        hubungan: "Ayah",
        jk: "Laki-laki",
        umur: "54 Tahun",
        pekerjaan: "Polisi",
        alamat: "Rantepao, Toraja Utara",
        pendidikan: "SMA",
        hobi: "",
        status: "Kepala Keluarga",
        foto: "images/galeri (8).jpeg"
    },

    {
        id: 2,
        nama: "Midrawati P",
        hubungan: "Ibu",
        jk: "Perempuan",
        umur: "49 Tahun",
        pekerjaan: "Guru",
        alamat: "Rantepao, Toraja Utara",
        pendidikan: "S1",
        hobi: "Memasak",
        status: "Ibu Rumah Tangga",
        foto: "images/galeri (5).jpeg"
    },

    {
        id: 3,
        nama: "M. Irvandy Setyawan",
        hubungan: "Anak Pertama",
        jk: "Laki-laki",
        umur: "28 Tahun",
        pekerjaan: "Pelayaran",
        alamat: "Rantepao, Toraja Utara",
        pendidikan: "S1",
        hobi: "Balap",
        status: "Anak",
        foto: "images/galeri (14).jpeg"
    },

    {
        id: 4,
        nama: "Irwan Ardiansyah",
        hubungan: "Anak Kedua",
        jk: "Laki-laki",
        umur: "26 Tahun",
        pekerjaan: "Mahasiswa",
        alamat: "Rantepao, Toraja Utara",
        pendidikan: "S1",
        hobi: "Bermain Game",
        status: "Anak",
        foto: "images/galeri (21).jpeg"
    },

    {
        id: 5,
        nama: "Irnawaty",
        hubungan: "Anak Ketiga",
        jk: "Perempuan",
        umur: "24 Tahun",
        pekerjaan: "Mahasiswa",
        alamat: "Rantepao, Toraja Utara",
        pendidikan: "S1",
        hobi: "Memasak",
        status: "Anak",
        foto: "images/galeri.jpeg"
    },

    {
        id: 6,
        nama: "Irsan Saifullah",
        hubungan: "Anak Keempat",
        jk: "Laki-laki",
        umur: "20 Tahun",
        pekerjaan: "Mahasiswa",
        alamat: "Rantepao, Toraja Utara",
        pendidikan: "SMA",
        hobi: "Tidur",
        status: "Anak",
        foto: "images/galeri (22).jpeg"
    },

    {
        id: 7,
        nama: "Ridho Akbar M",
        hubungan: "Anak Kelima",
        jk: "Laki-laki",
        umur: "17 Tahun",
        pekerjaan: "Pelajar SMA",
        alamat: "Rantepao, Toraja Utara",
        pendidikan: "SMA",
        hobi: "Bermain Game",
        status: "Anak",
        foto: "images/galeri (23).jpeg"
    }
];

// ===============================
// MENAMPILKAN DETAIL ANGGOTA
// ===============================

// Cek apakah sedang berada di halaman detail
if (window.location.pathname.includes("detail.html")) {

    const params = new URLSearchParams(window.location.search);

    const id = parseInt(params.get("id"));

    const anggota = keluarga.find(item => item.id === id);

    if (anggota) {

        document.getElementById("foto").src = anggota.foto;
        document.getElementById("nama").innerHTML = anggota.nama;
        document.getElementById("hubungan").innerHTML = anggota.hubungan;

        document.getElementById("nama2").innerHTML = anggota.nama;
        document.getElementById("jk").innerHTML = anggota.jk;
        document.getElementById("umur").innerHTML = anggota.umur;
        document.getElementById("pekerjaan").innerHTML = anggota.pekerjaan;
        document.getElementById("alamat").innerHTML = anggota.alamat;
        document.getElementById("pendidikan").innerHTML = anggota.pendidikan;
        document.getElementById("hobi").innerHTML = anggota.hobi;
        document.getElementById("status").innerHTML = anggota.status;

    }

}