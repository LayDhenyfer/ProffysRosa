const subjects = [
    "Arts",
    "Biology",
    "Science",
    "Physical education",
    "Physics",
    "Geography",
    "History",
    "Mathematics",
    "English",
    "Chemistry",
]

const weekdays = [
    "Sunday",
    "Monday",
    "Tuesday",
    "Wednesday",
    "Thursday",
    "Friday",
    "Saturday",
]

// Funcionalidades
function getSubject(subjectNumber) {
    const arrayPosition = subjectNumber
    return subjects[arrayPosition]
}

function  convertHoursToMinutes(time) {
   const [hour, minute] = time.split(":") 
   return Number((hour * 60) + minute)
}

module.exports = {
    subjects,
    weekdays,
    getSubject,
    convertHoursToMinutes
}