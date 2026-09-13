# TugasPraktikum3_HTTMLCSSJS

## Cara Kerja
### HTML
`<div class="cik">`
class ini yg jadi box putih dengan padding, rounded corner, dan shadow. Semua elemen di dalam `<body>` di wrap di sini biar keliatan jadi satu, dan nggak nempel di ujung kiri layar

`<div class="form-row">`
`<input type="text" id="exInput">` — isi keterangan pengeluaran, "id="exInput"" yang dipanggil di jawa.js lewat "document.getElementById("exInput").value" buat ngambil apa yang input sama user
`<input type="number" id="amInput">` — isi nominal, pake type="number" supaya otomatis nolak input huruf
`<button onclick="tamExp()">`  saat di klik, langsung manggil fungsi tamExp() di jawa.js. Ini yang bikin seluruh proses nambah data, class form-row di sini supaya box input dan button di satu baris yg berjejer

`<div id="expList">`
elemen ini sengaja gak diisi apa-apa di HTML. Isinya ditentuin JS lewat method innerHTML, yg dimana di generate ulang tiap kali render() jalan

`<div id="total">`
statis di luar `<span> ("Total expenses: Rp.", "Jumlah expense:")", sengaja dipisah dengan "<span>` biar JS cuma perlu ganti angkanya aja

### JavaScript
Data yang dimasukan user disimpan oleh array "exp" kosong yang bakalan di isi oleh user sendiri, fungsi "tamExp" di pake untuk user dapat menginput nama expenses dan juga nominal nya, dan jika yg diisi ada yg kosong akan mengeluarkan semacam warning supaya user menginput semua data sblm kelik tambahkan, fungsi "delExp" berfungsi dengan cara nerima index yg mau di hapus, dan splice() itu method array untuk delete data yg dipilih nya, method "render()" kerjanya buat nge generate ulang list berdasar "exp" yg terbaru, jadi kalo misal ada "exp" yg di hapus atau di tambahkan, render() bakalan nunjukin list yg udah terupdate, toLocaleString('id-ID') dipake supaya data angka yg di input user misal 1000000 dapat dibacah dengan mudah dengan menambahkan titik menjadi 100.000