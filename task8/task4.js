function giveJobToStudent(student, jobName) {
    student.job = jobName;
    const fullName = student.fullName;
    const message = `Поздравляем! У студента ${fullName} появилась новая работа! Теперь он ${jobName}`
    alert(message);
    return student;
}

const student = {
    fullName: "Максим",
    experienceInMonths: 12,
    stack: ['HTML', 'CSS', 'JavaScript', 'React']
};

const updatedStudent = giveJobToStudent(student, "веб-разработчик");
console.log(updatedStudent);