// Dapatkan tombol "Lacak Pengiriman"
const lacakButton = document.getElementById("lacakButton");

// Tambahkan event listener untuk tombol
lacakButton.addEventListener("click", function (e) {
    e.preventDefault(); // Hindari pengiriman form (jika Anda ingin menghindari refresh halaman)

    // Tampilkan notifikasi alert
    alert("Sedang melakukan maintenance. Mohon coba lagi nanti.");

    // Anda juga bisa menambahkan logika lain di sini, seperti mengirim permintaan ke server atau yang lainnya.
});