// เริ่มเขียนโค้ดตรงนี้
function printStar(n) {
  let results = "";
  for (let i = 1; i <= n; i++) {
    let Rowresult = "";
    for (let j = 1; j <= i; j++) {
      Rowresult += "*" + "\t";
    }
    results += Rowresult + "\n";
  }
  return results;
}

console.log(printStar(5));
