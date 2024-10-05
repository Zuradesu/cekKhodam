const jawaban = [
    'ayam',
    'sapi',
    'kambing',
    'lumba-lumba jawa'
];

// Fungsi untuk menghasilkan jawaban acak
function jawabanKacau() {
    // Ambil nilai input nama
    const nama = document.getElementById('nama').value;
    // Cek apakah nama telah diisi
    if(nama){
    const jawabAcak = Math.floor(Math.random() * jawaban.length)
    const hasil = jawaban[jawabAcak];
    
    alert("khodammu + adalah:" + hasil);
} else{
    alert("nama tidak bolehj kosong");
}


}; 
document.getElementById('submit-button').addEventListener('click', jawabanKacau);


