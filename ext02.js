function check_age(age_1) {
    if (typeof(age_1) == "number") {
        let age_2 = 18
        let age_3 = 60
        if (age_1 < age_2) return("You don’t have access cause your age is " + age_1 + " It’s less then ")
            else if ((age_1 >=  age_2) && (age_1 <  age_3)) return("Welcome  !")
                else if (age_1  > age_3) return("Keep calm and look Culture channel")
                    else return("Technical work")
    } else return("Incoming data error")
}

console.log(check_age(17))
console.log(check_age(18))
console.log(check_age(61))
console.log(check_age(60))
let myage = "43"
console.log(check_age(myage))
