/**
 * Khối 1: inputs
 * điểm chuẩn,điểm 3 môn, khu vực, đối tượng
 *
 *
 * Khối 2:
 * B1: tạo biến và lấy giá trị người dùng khi click
 * standardPoint,math, literature, english, area,people
 * B2: func checkValue => kiểm tra 3 giá trị 3 môn nhập vào --- <0 nhắc nhở người dùng, nếu = 0 thì rớt, ngược lại lấy giá trị
 * => tính được tổng 3 môn (sum)
 * B3: func checkArea => kiểm tra từng vùng, thì sum được cộng điểm
 * B4: func checkPeople => kiểm tra đối tượng để sum tiếp tục được cộng
 * B5: so sánh sum vs điểm chuẩn để xuất ra kết quả
 *
 * Khối 3:
 * Tổng số điểm đạt được, đậu hay rớt
 *
 */

// biến xuất điểm
var txtTotal = document.getElementById('txtTotal')
// lấy giá trị input để kiếm tra
function getValue(value) {
  if (value < 0 || value === '') {
    txtTotal.style.color = '#dc3545'
    txtTotal.innerHTML = 'Vui lòng nhập giá trị'
    return (value = 0)
  } else if (value === '0') {
    txtTotal.style.color = '#dc3545'
    txtTotal.innerHTML = 'Liệt một môn, không trúng tuyển!!'
    return (value = 0)
  } else {
    return value
  }
}
// kiểm tra khu vực
function checkArea(place, total) {
  if (place === 'A') {
    return (total += 2)
  } else if (place === 'B') {
    return (total += 1)
  } else if (place === 'C') {
    return (total += 0.5)
  } else {
    return total
  }
}
// kiểm tra đối tượng
function checkPeople(subject, total) {
  switch (subject) {
    case '1':
      total += 2.5
      break
    case '2':
      total += 1.5
      break
    case '3':
      total += 1
      break
    default:
      total = total
  }
  return total
}

// hàm click
function handleClick() {
  var math = document.getElementById('maths').value
  var literature = document.getElementById('literature').value
  var english = document.getElementById('english').value
  var area = document.getElementById('area').value
  var people = document.getElementById('people').value
  var standardPoint = Number(document.getElementById('standardPoint').value)
  var txtResult = document.getElementById('txtResult')
  // kiểm tra giá trị 3 môn
  math = getValue(math)
  literature = getValue(literature)
  english = getValue(english)
  // tính tổng 3 môn
  var sum = Number(math) + Number(literature) + Number(english)
  // kiểm tra dữ liệu để thí sinh được cộng điểm
  sum = checkArea(area, checkPeople(people, sum))
  // kiểm tra dữ liệu đạt hay rớt
  if (math && literature && english) {
    if (sum >= standardPoint) {
      txtTotal.style.color = '#66dc35'
      setTimeout(() => {
        txtResult.style.color = '#66dc35'
        txtResult.innerHTML = 'Chúc mừng bạn đã trúng tuyển'
      }, 1000)
      txtTotal.innerHTML = 'Tổng điểm: ' + sum
    } else {
      txtTotal.innerHTML = ''
      txtTotal.style.color = '#dc3545'
      setTimeout(() => {
        txtResult.style.color = '#dc3545'
        txtResult.innerHTML = 'Không trúng tuyển!!'
      }, 1000)
    }
  } else {
    txtResult.innerHTML = ''
  }
}
document.getElementById('btnTotal').onclick = handleClick
