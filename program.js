// if else dan nested if
const nilaiTugas = 70;

if (nilaiTugas >=100) {
    console.log ("Nilai tugas : A")
} else if (nilaiTugas >= 80) {
    console.log("Nilai tugas : B")
} else if (nilaiTugas >= 65) {
    console.log("Nilai tugas : C")
}else{
    console.log("Nilai tugas : D")
}



// switch case
const barang = "Laptop";

switch (barang) {
    case "Pulpen" :
        console.log("Barang ini adalah pulpen")
        break;
    case "Penghapus" :
        console.log("Barang ini adalah penghapus")
        break;
    case "Buku" :
        console.log("Barang ini adalah buku")
        break;
    case "Hp" :
        console.log("Barang ini adalah hp")
        break;
    default :
    console.log("Barang ini barang lain")
}


// while
var i=5
while (i < 10) {
    console.log("Anak Ayam Tidur");
    i++;
}


// do while
var a = 2;
do {
    console.log("Javascript");
    a++;
}while (a<=5)


// for statement
for(let i = 1; i <= 10; i++){
    console.log("Angka ke-" + i );
}


// function
function nama() {
    console.log("dini puspitasari");
}
nama();