// เริ่มเขียนโค้ดตรงนี้
function multiplicationTable(n) {
  let table = "";
  for (let i = 1; i <= n; i++) {
    for (let j = 1; j <= n; j++) {
      table += i * j + "\t";
    }
    table += "\n";
  }
}

console.log(multiplicationTable(5));
