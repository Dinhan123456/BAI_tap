let students = [];
let editIndex = -1; // lưu chỉ số sinh viên đang sửa

document.getElementById("saveBtn").addEventListener("click", function() {
    if (editIndex === -1) {
        save();
    } else {
        update();
    }
});

function save() {
    let fullName = document.getElementById("fullname").value.trim();
    let email = document.getElementById("email").value.trim();
    let sdt = document.getElementById("sdt").value.trim();
    let diachi = document.getElementById("diachi").value.trim();
    let gender = getGender();

    if (fullName && email && sdt && diachi && gender) {
        students.push({
            fullName: fullName,
            email: email,
            sdt: sdt,
            diachi: diachi,
            gender: gender
        });

        renderStudentList();
        resetForm();
    } else {
        alert("Vui lòng nhập đầy đủ thông tin!");
    }
}

function renderStudentList() {
    let tableBody = document.getElementById("studentList");
    tableBody.innerHTML = "";

    students.forEach(function (student, index) {
        let row = `<tr>
            <td>${index + 1}</td>
            <td>${student.fullName}</td>
            <td>${student.email}</td>
            <td>${student.sdt}</td>
            <td>${student.gender}</td>
            <td>${student.diachi}</td>
            <td>
                <a href="#" onclick="editStudent(${index})">Sửa</a> | 
                <a href="#" onclick="deleteStudent(${index})">Xóa</a>
            </td>
        </tr>`;
        tableBody.innerHTML += row;
    });
}


function deleteStudent(index) {
    if (confirm("Bạn có chắc chắn muốn xóa sinh viên này?")) {
        students.splice(index, 1);
        renderStudentList();
        resetForm();
    }
}

function editStudent(index) {
    let student = students[index];
    document.getElementById("fullname").value = student.fullName;
    document.getElementById("email").value = student.email;
    document.getElementById("sdt").value = student.sdt;
    document.getElementById("diachi").value = student.diachi;

    if (student.gender === "Nam") {
        document.getElementById("male").checked = true;
    } else if (student.gender === "Nữ") {
        document.getElementById("female").checked = true;
    }

    editIndex = index;
    document.getElementById("saveBtn").textContent = "Cập nhật";
}

function update() {
    let fullName = document.getElementById("fullname").value.trim();
    let email = document.getElementById("email").value.trim();
    let sdt = document.getElementById("sdt").value.trim();
    let diachi = document.getElementById("diachi").value.trim();
    let gender = getGender();

    if (fullName && email && sdt && diachi && gender) {
        students[editIndex] = {
            fullName: fullName,
            email: email,
            sdt: sdt,
            diachi: diachi,
            gender: gender
        };

        renderStudentList();
        resetForm();
    } else {
        alert("Vui lòng nhập đầy đủ thông tin!");
    }
}

function getGender() {
    if (document.getElementById("male").checked) {
        return document.getElementById("male").value;
    } else if (document.getElementById("female").checked) {
        return document.getElementById("female").value;
    }
    return "";
}

function resetForm() {
    document.getElementById("fullname").value = "";
    document.getElementById("email").value = "";
    document.getElementById("sdt").value = "";
    document.getElementById("diachi").value = "";
    document.getElementById("male").checked = false;
    document.getElementById("female").checked = false;
    editIndex = -1;
    document.getElementById("saveBtn").textContent = "Lưu lại";
}
