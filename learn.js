// membuat variabel
let myNumber = 16;
let myString = "Hello"
let myBoolean = true
const phi = 3.14

// menampilkan informasi ke console
console.log(myNumber)
console.log(myString)
console.log(myBoolean)
console.log(phi)

// menampilkan informasi dalam bentuk alert pada window
window.alert("Angka favorit saya adalah : " + myNumber)
window.alert('Angka favorit saya adalah : ' + myNumber)
window.alert(`Angka favorit saya adalah : ${myNumber}`)


let x = 8 // membuat variabel x dengan nilai 8
let y = 4 // membuat variabel y dengan nilai 4
console.log(x, y) // menampilkan nilai x dan y
console.log('x + y =', x + y) // menampilkan hasil penjumlahan nilai x dan y
console.log('x - y =', x - y) // menampilkan hasil pengurangan nilai x dan y
console.log('x * y =', x * y) // menampilkan hasil perkalian nilai x dan y
console.log('x / y =', x / y) //menampilkan hasil pembagian nilai x dan y
console.log('x % y =', x % y) //menampilkan hasil sisa bagi dari nilai x dan y
console.log('x++ =', x++) //menampilkan nilai increment x
console.log('++x =', ++x) //menjumlahkan nilai x dan mengembalikan nilai x
console.log('x-- =', x--) //menampilkan nilai decrement x
console.log('--x =', --x) //kebalikan dari increment x


let a = 8 // membuat variabel a dengan nilai 8
let b = 4 // membuat variabel b dengan nilai 4
console.log(a, b) // menampilkan nilai a dan b
console.log('a > b =', a > b) // menampilkan nilai true 
console.log('a < b =', a < b) // menampilkan nilai false 
console.log('a >= b =', a >= b) // menampilkan nilai true 
console.log('a <= b =', a <= b) // menampilkan nilai false 
console.log('a == b =', a == b) // menampilkan nilai false 
console.log('a != b =', a != b) // menampilkan nilai true 
console.log('a === b =', a === b) // menampilkan nilai false 
console.log('a !== b =', a !== b) // menampilkan nilai true 


console.log('true && true =', true && true) // menampilkan nilai true jika keduanya true
console.log('true && false =', true && false) // menampilkan nilai false jika terdapat false
console.log('false && true =', false && true) // menampilkan nilai false jika terdapat false
console.log('false && false =', false && false) // menampilkan nilai false jika keduanya false
console.log('true || true =', true || true) // menampilkan nilai true jika kedua atau salah satunyanya true
console.log('true || false =', true || false) // menampilkan nilai true jika terdapat true
console.log('false || true =', false || true) // menampilkan nilai true jika terdapat true
console.log('false || false =', false || false) // menampilkan nilai false jika kedua atau salah satunya false
console.log('!true =', !true) // not true menampilkan nilai false 
console.log('!false =', !false) // not false menampilkan nilai true 


function luasPersegi(sisi){
    let luasPersegi = sisi * sisi;
    return luasPersegi;
}
console.log('Luas Persegi = ',luasPersegi(15)); // menampilkan luas persegi = 225

function luasSegitiga(a,t){
    let luasSegitiga = 0.5 * a * t;
    return luasSegitiga;
}
console.log('Luas Segitiga = ', luasSegitiga(15,12)); // menampilkan luas segitiga = 90

function volumeBalok(p,l,t){
    let volumeBalok = p * l * t;
    return volumeBalok;
}
console.log('Volume Balok = ', volumeBalok(15,12,20)); // menampilkan volume balok = 3600


var hewan = ["Ayam", "Beruang", "Cicak", "Domba"];
console.log(hewan[0]);
console.log(hewan[1]);
console.log(hewan[2]);
console.log(hewan[3]);

hewan[1]="Gajah"; //mengganti array 1 menjadi Gajah
console.log(hewan); // menampilkan array terbaru

hewan.push("Beruang"); //menambah array baru Beruang
console.log(hewan); // menampilkan array terbaru

hewan.pop("Beruang"); // melihat dan menghapus item dari Array
console.log(hewan); // menampilkan array terbaru

console.log('Panjang Array = ', hewan.length); // menghitung panjang Array 

hewan.unshift("Elang"); // menambah Elang di awal Array
console.log(hewan); // menampilkan array terbaru

hewan.shift(); // menampilkan dan menghapus item awal dari array
console.log(hewan); // menampilkan array terbaru

console.log(hewan.sort()); // mengurutkan Array
console.log(hewan); // menampilkan array terbaru


let mhs = {
    firstName: "Fadhil", // membuat variabel firstName
    lastName : "Muzakki", // membuat variabel lastName
    NPM: "203510245", // membuat variabel NPM
    jenisKel: "Laki-laki", // membuat variabel jenisKel
    alamat: "Planet Bumi", // membuat variabel alamat

    info : function() { // membuat fungsi info
    return this.firstName + " " + this.lastName; //menggabungkan nama depan dan belakang
    }
};

console.log(mhs.firstName); //menampilkan firstName menggunakan metode Dot Notation
console.log(mhs.lastName); //menampilkan lastName menggunakan metode Dot Notation
console.log(mhs.NPM); //menampilkan NPM menggunakan metode Dot Notation
console.log(mhs.jenisKel); //menampilkan jenisKel menggunakan metode Dot Notation
console.log(mhs.alamat); //menampilkan alamat menggunakan metode Dot Notation
console.log(mhs.info()); //menampilkan info menggunakan metode Dot Notation

console.log(mhs["firstName"]); //menampilkan firstName menggunakan metode Bracket Notation
console.log(mhs["lastName"]); //menampilkan lastName menggunakan metode Bracket Notation
console.log(mhs["NPM"]); //menampilkan NPM menggunakan metode Bracket Notation
console.log(mhs["jenisKel"]); //menampilkan jenisKel menggunakan metode Bracket Notation
console.log(mhs["alamat"]); //menampilkan alamat menggunakan metode Bracket Notation
console.log(mhs["info"]()); //menampilkan info menggunakan metode Bracket Notation


console.log(0.1 + 0.2 == 0.3) // jika di hitung, hasil dari 0.1 + 0.2 = 0.300000000000000004, maka tidak sama dengan 0.3 karaena itu hasilnya false
console.log(1 + "1") // menampilkan angka 11 karena itu merupakan penggabungan antara numerik dan string
console.log(1 - "1") // menampilkan angka 0 karena operator - hanya untuk numerik, maka keduanya akan diubah menjadi numerik
console.log(1 < 2 < 3) // hasilnya true karena 1<2= menghasilkan nilai true yang mana true = 1, 1<3 maka hasilnya akan true
console.log(3 > 2 > 1) // hasilnya false karena 3>2= menghasilkan nilai true yang mana true = 1, 1>1 hasilnya akan false
console.log(null == 0) // hasilnya false karena nilai null tidak sama dengan nilai type int
console.log(null > 0) // hasilnya false karena nilai null=+0 sama dengan 0
console.log(null >= 0) // hasilnya true karena null <0 menghasilkan false maka sudah seharusnya null >=0 menghasilkan true