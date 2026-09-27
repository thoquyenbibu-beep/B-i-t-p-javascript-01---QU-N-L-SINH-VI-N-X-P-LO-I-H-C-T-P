```javascript
// Hàm tính điểm trung bình
function calculateAverage(scores) {
    let total = 0;

    for (let score of scores) {
        total += score;
    }

    return total / scores.length;
}

// Hàm xếp loại học tập
function classify(avg) {
    if (avg >= 8.0) {
        return "Giỏi";
    } else if (avg >= 6.5) {
        return "Khá";
    } else if (avg >= 5.0) {
        return "Trung bình";
    } else {
        return "Yếu";
    }
}

// Danh sách môn học
const subjects = [
    "Giải tích 1",
    "Đại số tuyến tính",
    "Xác suất thống kê",
    "Tin học đại cương",
    "Xây dựng ứng dụng Web"
];

// Xử lý khi bấm nút "Tính kết quả"
document.getElementById("studentForm").addEventListener("submit", function(event) {

    // Không reload trang
    event.preventDefault();

    const name = document.getElementById("studentName").value.trim();

    const scoreInputs = [
        document.getElementById("giaiTich"),
        document.getElementById("daiSo"),
        document.getElementById("xacSuat"),
        document.getElementById("tinHoc"),
        document.getElementById("web")
    ];

    const errorMessage = document.getElementById("errorMessage");

    // Xóa thông báo lỗi cũ
    errorMessage.textContent = "";

    // Kiểm tra tên
    if (name === "") {
        errorMessage.textContent = "Vui lòng nhập tên sinh viên!";
        return;
    }

    const scores = [];

    // Kiểm tra 5 điểm
    for (let input of scoreInputs) {

        if (input.value === "") {
            errorMessage.textContent = "Vui lòng nhập đầy đủ điểm của 5 môn!";
            return;
        }

        const score = Number(input.value);

        if (score < 0 || score > 10 || isNaN(score)) {
            errorMessage.textContent =
                "Điểm phải nằm trong khoảng từ 0 đến 10!";
            return;
        }

        scores.push(score);
    }

    // Tính điểm trung bình
    const avg = calculateAverage(scores);

    // Xếp loại
    const classification = classify(avg);

    // Hiển thị tên
    document.getElementById("resultName").textContent = name;

    // Hiển thị bảng điểm
    const resultTable = document.getElementById("resultTable");

    resultTable.innerHTML = "";

    for (let i = 0; i < subjects.length; i++) {

        const row = document.createElement("tr");

        row.innerHTML = `
            <td>${i + 1}</td>
            <td>${subjects[i]}</td>
            <td>${scores[i].toFixed(2)}</td>
        `;

        resultTable.appendChild(row);
    }

    // Hiển thị điểm trung bình
    document.getElementById("average").textContent =
        avg.toFixed(2);

    // Hiển thị xếp loại
    document.getElementById("classification").textContent =
        classification;

    // Hiển thị khu vực kết quả
    document.getElementById("result").classList.remove("hidden");
});
```
