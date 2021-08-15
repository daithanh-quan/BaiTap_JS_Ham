/**
 * Khối 1: inputs
 * phí xử lý hóa đơn, phí dịch vụ, thuê kênh cao cấp
 * Khối 2:
 * B1: Xử lý đóng mở input (số kết nối)
 * customer với các value của option = Doanh nghiệp thì display: block, ngược lại=> display: none
 * B2: tạo biến và lấy các giá trị người dùng nhập vào khi click
 * customer, customCode, highChanel, numberOfConnecting
 * B3: func sum() : tính chung tiền cáp nhà dân và doanh nghiệp
 * B4: điều kiện: nhà dân: sum() , doanh nghiệp: <=10 => + 75$  ngược lại => (số kênh -10) * 5$
 * B5: xuất kết quả
 * Khối 3: outputs
 * tiền cáp
 */
// nhà dân
const BILL_HOUSE = 4.5
const BASIC_HOUSE = 20.5
const CHANEL_HOUSE = 7.5
// doanh nghiệp
const BILL_BUSINESS = 15
const BASIC_BUSINESS = 75
const CHANEL_BUSINESS = 50
const BONUS_CHANEL = 5
// biến dùng chung
let customer = document.getElementById('customer')
let txtMoneyWiFi = document.getElementById('txtMoneyWiFi')
// hàm đóng mở input
function handleChange() {
  var active = document.getElementById('active')
  if (customer.value == 'business') {
    return (active.style.display = 'block')
  } else {
    return (active.style.display = 'none')
  }
}

//hàm tính tiền cap
function sum(value1, value2, value3, value4, n1, n2) {
  return Number(value1 + value2 * n1 + value4 + value3 * n2)
}

function handleClick() {
  var customCode = document.getElementById('customCode').value
  var numberOfConnecting = document.getElementById('numberOfConnecting').value
  var highChanel = Number(document.getElementById('highChanel').value)
  var total = 0
  switch (customer.value) {
    case '':
      txtMoneyWiFi.style.color = '#dc3545'
      txtMoneyWiFi.innerHTML = 'Vui lòng chọn khách hàng!!'
      break
    case 'house':
      total = sum(BILL_HOUSE, 0, CHANEL_HOUSE, BASIC_HOUSE, 1, highChanel)
      txtMoneyWiFi.style.color = '#35dc3a'
      txtMoneyWiFi.innerHTML =
        'Mã khách hàng: ' + customCode + ' , Tổng tiền: ' + total + '$'
      break
    case 'business':
      if (numberOfConnecting <= 10 && numberOfConnecting > 0) {
        total = sum(
          BILL_BUSINESS,
          0,
          CHANEL_BUSINESS,
          BASIC_BUSINESS,
          1,
          highChanel
        )
      } else {
        total = sum(
          BILL_BUSINESS,
          BONUS_CHANEL,
          CHANEL_BUSINESS,
          BASIC_BUSINESS,
          numberOfConnecting - 10,
          highChanel
        )
      }
      txtMoneyWiFi.style.color = '#35dc3a'
      txtMoneyWiFi.innerHTML =
        'Mã khách hàng: ' + customCode + ' , Tổng tiền: ' + total + '$'
      break
    default:
      txtMoneyWiFi.innerHTML = ''
  }
}

document.getElementById('btnMoneyWiFi').onclick = handleClick
