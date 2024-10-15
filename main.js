/**
 * 2.4 - Custom Functions
 * ICS3 - Mr. Brash 🐿️
 * 
 * Read README.md and YOUR_Task.md 
 * 
 * This is a playground. Feel free to play.
 **/ 


// Example custom function using Number() and prompt()
function circle_area() {

    let radius = Number(prompt("What is the radius of the circle?"))

    console.log(`The area is: ${Math.PI * radius**2}`)

}

/*****  Your code goes below  *****/


//converting celsius to fahrenheit with user
function to_fahrenheit(){
    let celsius = +prompt("input random temperature in celsius and i'll convert it to fahrenheit")
    
    let fahrenheit = Math.round((celsius * 9/5) + 32)
    
    console.log(`${fahrenheit}° fahrenheit is equal to ${celsius}° celsius`)
    }
to_fahrenheit()

//converting fahrenheit to celsius with user
function to_celsius(){
    fahrenheit = +prompt("input random temperature in fahrenheit and i'll convert it to celsius")
    
    celsius = Math.round((fahrenheit - 32) * 5/9)
    
    console.log(`${fahrenheit}° fahrenheit is equal to ${celsius}° celsius`)
}
to_celsius()

//rolling a di with ten sides
function roll_d10(){
    let di  = Math.floor(Math.random() * 10 + 1)
    
    console.log(`a ten sided di just rolled to side ${di}`)
}
roll_d10()

//rolling a di with six sides
function roll_d6(){
    di = Math.floor(Math.random() * 6 + 1)
    
    console.log(`a six sided di just rolled to side ${di}`)
}
roll_d6()

//randomizing numbers with user 
function users_number() {
    let top_value = Number(prompt("input number and i'll generate a random value from 1 - your input"))
    
    console.log(`random value is ${Math.round(Math.random() * top_value + 1)}`)
}
users_number()

//volumes
let volume = 5

function show_volume(){
    console.log(`volume is currently ${volume}`)
}
show_volume()

function volume_up(){
    volume = volume + 1 

    console.log("volume just increased by 1")
    
    show_volume()
}
volume_up()

function volume_down(){
    volume = volume - 1

    console.log("volume just decreased by 1")
    
    show_volume()
}
volume_down()
volume_down()

function random_volume(){
    volume = Math.round(Math.random() * 10 + 1)

    console.log("volume just randomized")

    show_volume()
}
random_volume()

//guessing user's birthday 
function born_in(){
    age = Number(prompt("input your current age and i'll guess what year you were born in"))

    year = 2024 - age 

    console.log(`you were probably born in ${year}`)
}
born_in()