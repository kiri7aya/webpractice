// Task 1: Student names and marks
const students = [
    { name: "Alice", mark: 85 },
    { name: "Bob", mark: 90 },
    { name: "Charlie", mark: 78 },
    { name: "David", mark: 92 },
    { name: "Eve", mark: 88 }
];

// Display the students' names and marks on the page
const studentMarksList = document.getElementById("studentMarksList");
students.forEach(student => {
    const listItem = document.createElement("li");
    listItem.textContent = `${student.name}: ${student.mark}`;
    studentMarksList.appendChild(listItem);
});

function computeAverage() {
    const totalMarks = students.reduce((sum, student) => sum + student.mark, 0);
    const average = totalMarks / students.length;
    const grade = average >= 90 ? 'A' : average >= 80 ? 'B' : average >= 70 ? 'C' : 'D';
    document.getElementById("averageResult").innerText = `Average: ${average.toFixed(2)}, Grade: ${grade}`;
}

// Task 2: Keydown Event Listener
document.getElementById("textInput").addEventListener("keydown", function(event) {
    if (event.key === "Enter") {
        alert("Enter key was pressed!");
    }
});

// Task 3: Double Click Event
document.getElementById("doubleClickBtn").addEventListener("dblclick", function() {
    document.getElementById("doubleClickResult").innerText = "Button double-clicked!";
});

// Task 4: Progress Bar Update
let progress = 0;
function updateProgress() {
    if (progress < 100) {
        progress += 10;
        document.getElementById("progressBar").style.width = progress + "%";
        document.getElementById("progressBar").innerText = progress + "%";
    }
}

// Task 5: FizzBuzz
function runFizzBuzz() {
    let output = "";
    for (let i = 1; i <= 100; i++) {
        if (i % 3 === 0 && i % 5 === 0) {
            output += "FizzBuzz ";
        } else if (i % 3 === 0) {
            output += "Fizz ";
        } else if (i % 5 === 0) {
            output += "Buzz ";
        } else {
            output += i + " ";
        }
    }
    document.getElementById("fizzBuzzResult").innerText = output;
}
