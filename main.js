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

    let radius = Number(prompt("What is the radius of the circle?"));

    console.log(`The area is: ${Math.PI * radius**2}`);

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

//randomizing number with user 

//volumes

//