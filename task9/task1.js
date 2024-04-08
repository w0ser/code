function getDateFormat(date, separator = '.') {
    const day = date.getDate().toString().padStart(2, '0');
    const month = (date.getMonth() + 1).toString().padStart(2, '0');
    const year = date.getFullYear();
    
    return (`${day}${separator}${month}${separator}${year}`);
}

const currentDate = new Date();
const formattedDate = getDateFormat(currentDate, '-');
console.log(formattedDate);