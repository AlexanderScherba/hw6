function check_age(age_1) {
    age_1 = + age_1
    if (Number.isInteger(age_1)) {
        let age_2 = 18
        let age_3 = 60
        if (age_1 < age_2) return("You don’t have access cause your age is " + age_1 + " It’s less then ")
            else if ((age_1 >=  age_2) && (age_1 <  age_3)) return("Welcome  !")
                else if (age_1  > age_3) return("Keep calm and look Culture channel")
                    else return("Technical work")
    } else return("Incoming data error")
}

age = prompt("Enter your age")
alert(check_age(age))