
let nama = 'bayuumar';
    nama = 'abdul saleh';

    let umur = 26;

function printDataNama(nama,umue)
{
    let data_saya = `nama saya adalah ${nama} dan umur saya ${umur}`;
    console.log(data_saya);
}

// printDataNama(nama,umur);

const dataSaya = {
    nama : 'bayuumar',
    umur : 26,
    printDataNama :(nama = "nama lengkap", umur = "wajib diatas 17 tahun")=>{
        var data = `nama saya adalah ${nama} dan umur saya ${umur}`;
    console.log(data);
    }

}

dataSaya.printDataNama(dataSaya.nama, dataSaya.umur);

