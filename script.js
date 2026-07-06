document.getElementById("datum").innerText =
    "heute: " + new Date().toLocaleDateString();

function generateGrade() {
    let grade = (Math.random() * 1.5 + 8.5).toFixed(1);
    let num = Number(grade/10)*100
    document.getElementById("note").innerText =
        "meine Note: " + grade + " / 10 bzw. " + num+ "% der Hausaufgabe bestanden";
}
