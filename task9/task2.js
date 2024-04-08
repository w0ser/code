function convertMsToDays(milliseconds) {
    const msInDay = 1000 * 60 * 60 * 24;
    return Math.round(milliseconds / msInDay);
}

function getDaysBeforeBirthDay(nextBirthDayDate) {
    const currentDate = new Date();
    const currentYear = currentDate.getFullYear();
    
    let nextBirthDay = new Date(currentYear, nextBirthDayDate.getMonth(), nextBirthDayDate.getDate());
    
    if (nextBirthDay < currentDate) {
        nextBirthDay = new Date(currentYear + 1, nextBirthDayDate.getMonth(), nextBirthDayDate.getDate());
    }
    
    const timeDiff = nextBirthDay.getTime() - currentDate.getTime();
    return convertMsToDays(timeDiff);
}

const nextBirthDayDate = new Date('2024-07-03');
const daysBeforeBirthDay = getDaysBeforeBirthDay(nextBirthDayDate);
console.log(daysBeforeBirthDay);