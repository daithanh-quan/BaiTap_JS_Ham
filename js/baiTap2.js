/**
 * Khối 1: inputs
 * tiền theo từng chữ điện
 *
 * Khối 2:
 * B1: tạo biến về giá của từng thang cấp chữ điện
 * firstKW,secondKW,threeKW,fourKW,endKW
 * B2: tạo biến và lấy giá trị mà người dùng khi click
 * name,numberOfElect
 * B3: tạo biến hóa đơn : bill
 * B4: kiếm tra giá trị. Không đúng thì xuất thông báo yêu cầu user nhập đúng, ngược lại
 * thì xét điều kiện theo từng thang cấp để tính toán
 * B4: tính số chữ điện đã dùng
 * Khối 3: outputs
 * trả tiền theo số chữ điện đã dùng
 */
const firstKW = 500
const secondKW = 650
const threeKW = 850
const fourKW = 1100
const endKW = 1300

// hàm so sánh dữ liệu và tính

function handleClick() {
  var name = document.getElementById('name').value
  var numberOfElect = document.getElementById('numberOfElect').value
  var bill = 0
  // in kết quả
  var txtMoney = document.getElementById('txtMoneyElect')
  if (name === '' || numberOfElect === '') {
    txtMoney.style.color = '#dc3545'
    txtMoney.innerHTML = 'Vui lòng nhập dữ liệu!!'
  } else {
    if (numberOfElect <= 50) {
      bill = numberOfElect * firstKW
    } else if (numberOfElect > 50 && numberOfElect <= 100) {
      bill = 50 * firstKW + (numberOfElect - 50) * secondKW
      console.log(bill)
    } else if (numberOfElect > 100 && numberOfElect <= 150) {
      bill = 50 * firstKW + 100 * secondKW + (numberOfElect - 100) * threeKW
    } else {
      bill =
        50 * firstKW +
        100 * secondKW +
        150 * threeKW +
        (numberOfElect - 150) * endKW
    }
    txtMoney.style.color = '#35dc3a'
    txtMoney.innerHTML =
      'Họ tên: ' + name + ' , ' + 'Tiền điện: ' + bill.toLocaleString() + 'd'
  }
}
document.getElementById('btnMoneyElec').onclick = handleClick
