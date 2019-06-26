let myPeople = [
 {
    title: "a",
    name: "aa",
    bio: "aaa",
    image: "aaaa",
    lifespan: {
        birth:"aaaaa",
        death: "aaaaaa"
    }
},
{
    title: "b",
    name: "bb",
    bio: "bbb",
    image: "bbbb",
    lifespan: {
        birth:"bbbbb",
        death: "bbbbbb"
    }
},
{
    title: "c",
    name: "d",
    bio: "e",
    image: "f",
    lifespan: {
        birth:"g",
        death: "h"
    }
},
{
    title: "i",
    name: "j",
    bio: "k",
    image: "l",
    lifespan: {
        birth:"m",
        death: "n"
    }
},
{
    title: "o",
    name: "p",
    bio: "q",
    image: "r",
    lifespan: {
        birth:"s",
        death: "t"
    }
},
{
    title: "u",
    name: "v",
    bio: "w",
    image: "x",
    lifespan: {
        birth:"y",
        death: "z"
    }
}
];

let peopleContainer = document.getElementById("cardcontainer");
let personString = "";

for ( let i = 0; i < myPeople.length; i++ ) {
    personString += 
    
    `<div id="cardID-${i}">
    <header class="nameTitle">
    <h2> ${myPeople[i].title} </h2> 
    <h3> ${myPeople[i].name} </h3>
        </header>
        <section class="bio">
            <div>
                <p> ${myPeople[i].bio} </p>
                <img src = " ${myPeople[i].image} " />
            </div>
        </section>
        <footer>
            <p class="footnote">
                Live from ${myPeople[i].lifespan.birth} to ${myPeople[i].lifespan.death}
            </p>
        </footer>
                
    </div> ` 
};

peopleContainer.innerHTML = personString;

peopleContainer.addEventListener("click", function(event) {
    console.log("click test");
    let bioClass = document.getElementsByClassName("bio");

    for ( let x =0; x < bioClass.length; x++ ){
        bioClass[x].classList.add("yellow")
    }

}
);



