console.log("------------50 Bilangan Ganjil--------------");

const OddNums = () => {
    let bil = 1
    while (bil <= 100) {
        if(bil%2==1){
            console.log(bil)
        }
        bil++
    }
}
OddNums()