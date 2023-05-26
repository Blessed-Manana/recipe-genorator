var input1 = document.getElementById('input1');
var input2 = document.getElementById('input2');
var input3 = document.getElementById('input3');
var submit = document.getElementById('submit');
const img = document.querySelector("#dish-img");
var recipeList = document.getElementById('recipeList');
const recipeImg = document.getElementById('recipeImg');
var recipeDisplay = document.querySelector('.recipe-display');
var getImg = document.getElementById('getImg');

food = [
    {
        name: "good",
        style: "african style",
        pic: "",
        timeOfCooking: "02:00"

    }
]


// console.log(loading())
// function loading(event) {
//     recipeImg.style.display = "block"
//     recipeImg.src = URL.createObjectURL(event.target.files[0])
// }
submit.addEventListener('click', () => {
    if (input1.value == "" || input2.value == "" || input3.value == "") {
        alert("PLEASE fill in details before submiting")
    } else {
        // getImg.setAttribute('src',  recipeImg.src);


        //image upload
        const file = img.files[0]
        const imageElement = document.createElement("div")
        let reader = new FileReader()

        if (file) {
            reader.onload = function (e) {

                var paragraph = document.createElement('div')
                paragraph.innerHTML = imageElement.innerHTML = '<img src="' + e.target.result + '">' + "<br>" + "<br>" + "You have entered " + input1.value + "<br>" + " with the style of " + input2.value + "<br>" + "And would like to cook in " + input3.value;
                // paragraph.innerHTML = `<img src="${loading()}" alt="pic" > <br> ${input1.value} <br> ${input2.value} <br> ${input3.value}`
                paragraph.classList.add('p-styling');
                recipeList.appendChild(paragraph);

                paragraph.addEventListener('dblclick', () => {
                    recipeList.removeChild(paragraph);
                })

                paragraph.addEventListener('click', () => {
                    paragraph.innerHTML = "When it comes to" + input1.value + ", we’re all looking for something affordable, quick and easy, and satisfying (we’ve got to look forward to them all day, after all). These recipes hit all three criteria, with ease. You don’t have to drop major dough to make something delicious that can be on your table in an hour or less—save money by choosing cheaper proteins (we’re talking chicken, ground proteins, or vegetarian options) and time by making these dishes all in one pan, in your fave kitchen appliance, or via some of our top kitchen shortcuts. Whatever your style, these cheap and easy meals will please your entire family without breaking the bank." + input2.value + " " + " style you want you to got youtube and hopefully it will be ready by " + input3.value;



                    var paragraph2 = paragraph
                    recipeDisplay.appendChild(paragraph2);
                })

                recipeList.addEventListener('dblclick', () => {
                    recipeList.removeChild(paragraph);
                    paragraph.style.display = 'none'
                })

            }
            reader.readAsDataURL(file)
        }
    }
})





// console.log(this);

// var myCar2 ={
//     maxSpeed : 70,
//     driver: 'Kees',
//     drive: function(speed, time){
//         console.log(speed * time);
//     },
//     // test: function(){
//     //     console.log(this);
//     // }
//     logDriver: function(){
//         console.log('Driver name is ' + this.driver)
//     }
// };

// myCar2.logDriver();
// console.log(myCar2.maxSpeed);
// myCar2.drive(50, 3)

// var Car = function(maxSpeed, driver){
//     this.maxSpeed = maxSpeed
//     this.driver = driver
//     this.drive =  function(speed, time){
//         console.log(speed * time);
//     };
//     this.logDriver =  function(){
//         console.log('Driver name is ' + this.driver)
//     };
// }

// var myCar = new Car(30, "KEES")
// var myCar2 = new Car(40, "Zick")
// var myCar3 = new Car(70, "Ambro")
// var myCar4 = new Car(10, "John")

// myCar.drive(30,5)
// myCar.logDriver()
// myCar2.drive(40,5)
// myCar2.logDriver()
// myCar3.drive(60,5)
// myCar3.logDriver()
// myCar4.drive(6,5)
// myCar4.logDriver()

// console.log(myCar4)