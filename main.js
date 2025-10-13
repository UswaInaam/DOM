// document.getElementById("paragraph").innerHTML = "this is a paragraph" + "also this is added";


// let spans = document.getElementsByTagName("span");
// console.log(spans.length);
// document.getElementById("paragraph").innerHTML = `there are ${spans.length} tags in my html page`;
// document.getElementById("paragraph").innerHTML="this is a pragraph";

// let spans=document.getElementsByTagName("span");

// document.getElementById("paragraph").innerHTML=`There are ${spans.length} Span Tags in my html page`;


// let classnames=document.getElementsByClassName("test");

// console.log(classnames);



// console.log(classnames.length); //2
// console.log(classnames.item(0));
// console.log(classnames[1]);


// const obj={
//     id:1,
//     names:"Ali",
//     age:23
// };


//let a=[0,1,2,3,4]
// console.log(a[0]);


// let paragraph=document.getElementById("para");

// paragraph.innerHTML='<span style="background-color:black; color:white;">I am span tag inside p tag using innerhtml property</span>';

// paragraph.innerText='hello i am simple text that is added via js';


// let image=document.getElementById("change");

// image.src="vision.jpg";
// // image.height="600px";

// let link=document.getElementById("link");
// link.href="https://facebook.com";

function clicked() {
    alert("this button is clicked!")
}

function doubleclick() {
    alert("this button is clicked twice!!!")
}

function enter() {
    alert("the cursor is on button!!!")
}

function leave() {
    alert("the cursor have left the button!!!")
}
function changeText() {
    let text = document.getElementById("para");
    text.innerText = 'hey!im areeeba';

}
function changeText1() {
    let elements = document.getElementsByClassName("mytext");
    elements[0].innerText = "the text is changed";

}
function changeText2() {
    let tags = document.getElementsByTagName("h2");
    tags[0].innerText = "im from China";
}

// let paragraph2 = document.getElementById("para2");
// let button = document.getElementById("chngebtn");
// button.addEventListener("click", function () {
//     para2.textContent = "chnaged paragraph";

// });
function showtext() {
    let input = document.getElementById("userInput");
    input.hidden = false;

}
// let Input = document.getElementById("focus");
// function changeText3() {

//     Input.value = "this is after change";
// }
// function changeback() {
//     Input.value = "this is after blur";
// }
function changeParagraph() {
    let paragraph=document.getElementById("para2");
    paragraph.innerText="This is the text that is changed when i have clicked it!"
    
}
function changeParagraph1() {
    let paragraph=document.getElementById("para3");
    paragraph.innerText="This is the text that is changed when i have clicked it!"
    
}
// function display()
//  {
//     let p_tag=document.getElementsByTagName("p");
//     console.log(p_tag);
//     p_tag[1].hidden=false;
//     p_tag[0].hidden=true;
// }