
const dateInput = document.getElementById('date');
const calculateBtn = document.getElementById('calculate-btn');
const addBtn = document.getElementById('add-btn');
const resultDisplay = document.getElementById('result-display');


calculateBtn.addEventListener('click', calculateBirthdayCountdown);




function calculateBirthdayCountdown() {
    
    
    const userBirthdayString = dateInput.value;

    if (!userBirthdayString) {
        resultDisplay.innerHTML = '<p style="color: red;">🛑 Please enter a valid date!</p>';
        return; 
    }


    const today = new Date();

    const birthDate = new Date(userBirthdayString);
    
    const birthMonth = birthDate.getMonth(); 
    const birthDay = birthDate.getDate();   

    

    let nextBirthday = new Date(today.getFullYear(), birthMonth, birthDay);

    if (nextBirthday < today) {
      
        nextBirthday.setFullYear(today.getFullYear() + 1);
    }
    
    const isTodayBirthday = 
        today.getDate() === birthDay && 
        today.getMonth() === birthMonth;

    if (isTodayBirthday) {

        resultDisplay.innerHTML = '<p class="happy-birthday">Happy Birthday! 🎉🎂</p>';
        return; 
    }

    const differenceInTime = nextBirthday.getTime() - today.getTime();
    
    const MS_PER_DAY = 1000 * 60 * 60 * 24;
    const daysUntilBirthday = Math.ceil(differenceInTime / MS_PER_DAY);

    
    let message = `<p>Your birthday is in **${daysUntilBirthday}** days! 🥳</p>`;

    if (daysUntilBirthday <= 7 && daysUntilBirthday > 0) {
        message += `<p style="color: #e91e63; font-size: 0.9em;">**The party is almost here! Get ready!**</p>`;
    }

    resultDisplay.innerHTML = message;
}