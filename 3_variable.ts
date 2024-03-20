//var, let ,const
let X = 1
X = 5
console.log(X)

let y:number
y=5
console.log(y)

const z =10
console.log(z)

const message= "Hello World"
console.log(message)


const isFat =true
console.log(isFat)

//Example :Weight 
const weight1=50
const weight2=40

console.log("Sum of Weight is "+(weight1+weight2))
console.log("Diff of Weight is "+(weight1-weight2))

//Question1: BMI calculator(W/h^2)
const weight=60
const height=1.70
const bmi =weight / (height * height)
console.log("Weight = "+ weight+"Height = "+height+"BMI ="+bmi)
console.log(`Weight = ${weight} Height = ${height} BMI=${bmi}`)

//Question2: Celcuis to Fareheit((0`C x 9/5)+32)

const celcuis =35
const fareheit=(celcuis*9/5)+32
console.log(`From ${celcuis} celcius to ${fareheit} Farenheit`)