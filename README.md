# React Native MVVM

<p align="center">
  <img src="https://upload.wikimedia.org/wikipedia/commons/8/87/MVVMPattern.png">
<p>

<br>
MVVM merupakan salah satu design pattern yang dapkat kita gunakan untuk mengordinir code, membagi code menjadi beberapa module agar development, update code menjadi lebih sederhana dan lebih cepet. konsep utamanya adalah dengan memisahkan antara logic bisnis dan tampilan, sehingga pada setiap UI tidak ada logic, logic disimpan pada module terpisah yang saling terhubung.

<br>
Pembagian code dalam MVVM dibagi menjadi Model, View, dan ViewModel :

1. View merupakan kumpulan elemen tampilan yang juga dapat digunakan untuk menerima input user. View meliputi User Interface, animasi dan text.  Konten yang berada dalam view tidak berhubungan secara langsung untuk mengubah apa-apa yang ditampilkan.
2. ViewModel berada di antara lapisan View dan Model. ViewModel dimana kendali untuk berinteraksi dengan view di lakukan, sementara itu ikatannya digunakan untuk menghubungan element UI di dalam view terhadap kendali di dalam ViewModel. basaha sederhana nya untuk mengelola/berinteraksi/sebagai jembatan antara view dan model dimana proses logic busines dijalankan.
3. Model merepresentasikan bentukan data atau konten.


---
notes
- contoh implementasi MVVM pada repo ini menggunakan react native dam req res open api sebagai studi kasus
- jika masih terdapat kesalah dalam implementasi, feel free untuk membenarkan, hehe


enjoyed !

## References
- [wikipedia](https://en.wikipedia.org/wiki/Model–view–viewmodel)
- [article tech target](https://www.techtarget.com/whatis/definition/Model-View-ViewModel)
- [kota kode](https://kotakode.com/blogs/2817/Mengenal-MVVM)