/**
 * Khối 1: inputs
 *  phần trăm thuế
 * Khối 2:
 * B1: tạo biến và lấy giá trị người dùng nhập khi click
 * namePerson,yearIncome,numberOfPeople
 * B2: tạo biến và lấy giá trị % thuế suất cho mỗi thu nhập
 * firstTax,secondTax, threeTax, fourTax, fiveTax, sixTax, endTax
 * B3: tính thu nhập = yearIncome - 4e+6 -  numberOfPeople * 1.6e+6
 * B4: so sánh mức thu nhập vs bảng thu nhập => tính thuế
 *
 * Khối 3: outputs
 * tính và xuất thuế
 */

const firstTax = 0.05
const secondTax = 0.1
const threeTax = 0.15
const fourTax = 0.2
const fiveTax = 0.25
const sixTax = 0.3
const endTax = 0.35
var txtIncome = document.getElementById('txtIncome')
// so sánh với dữ liệu và tính thuế
function checkValue(income, value1, value2, tax) {
  var namePerson = document.getElementById('namePerson').value

  if (income > value1 && income <= value2) {
    let result = 0
    result = income * tax
    txtIncome.style.color = '#35dc3a'
    return (txtIncome.innerHTML =
      'Họ tên: ' + namePerson + ' , ' + 'Tiền thuế: ' + result.toLocaleString())
  }
  return
}
function handleClick() {
  var yearIncome = document.getElementById('yearIncome').value
  var parseYearIncome = Number(yearIncome)
  var numberOfPeople = document.getElementById('numberOfPeople').value
  var income = parseYearIncome - 4e6 - numberOfPeople * 1.6e6

  // kiểm tra và in kết quả

  if (namePerson === '' || yearIncome === '' || numberOfPeople === '') {
    txtIncome.style.color = '#dc3545'
    txtIncome.innerHTML = 'Vui lòng nhập dữ liệu!!'
  } else {
    checkValue(income, 0, 60e6, firstTax)
    checkValue(income, 60e6, 120e6, secondTax)
    checkValue(income, 120e6, 210e6, threeTax)
    checkValue(income, 210e6, 384e6, fourTax)
    checkValue(income, 384e6, 624e6, fiveTax)
    checkValue(income, 624e6, 960e6, sixTax)
    checkValue(income, 960e6, Infinity, endTax)
  }
}
document.getElementById('btnIncome').onclick = handleClick
