const link_0 = document.querySelector(".link_0 "),
link_1 = document.querySelector(".link_1 "),
link_2 = document.querySelector(".link_2 "),
link_3 = document.querySelector(".link_3 "),
activ_link = document.querySelector(".activ_link "),
box_link_0  = document.querySelector(".box_link_0 "),
box_link_1  = document.querySelector(".box_link_1 "),
box_link_2  = document.querySelector(".box_link_2 "),
icon_id = document.querySelector(".icon_id "),
Message_animatsion = document.querySelector(".Message_animatsion "),
Message_animatsion_1 = document.querySelector(".Message_animatsion_1 "),
Message_animatsion_span = document.querySelector(".Message_animatsion_span "),
Message = document.querySelector(".Message"),
Message_1 = document.querySelector(".Message_1"),
Message_4 = document.querySelector(".Message_4"),
input_Message = document.querySelector(".input_Message "),
text_Message_1 = document.querySelector(".text_Message_1 "),
text_Message = document.querySelector(".text_Message "),
textarea = document.querySelector("textarea"),
placeholder = document.querySelector("placeholder"),
Img = document.querySelector(".Slider_box"),
box_1 = document.querySelector(".box_1");


link_0.addEventListener( 'click' , function () {

    box_1.style.maxWidth = "80%";
    activ_link.style.marginLeft = '77.8%';
    activ_link.style.width = '40px';
    box_link_0.style.display = "none"; 
    box_link_1.style.display = "none";
    box_link_2.style.display = "none";
  

} );
link_1.addEventListener( 'click' , function () {

    box_1.style.maxWidth = "80%";
    activ_link.style.marginLeft = '68.6%';
    activ_link.style.width = '45px';
    box_link_0.style.display = "none"; 
    box_link_1.style.display = "none";
    box_link_2.style.display = "block";
    
    

} );
link_2.addEventListener( 'click' , function () {

    box_1.style.maxWidth = "90%";
    activ_link.style.marginLeft = '59.8%';
    activ_link.style.width = '45px';
    setTimeout(() => {
        box_link_0.style.display = "block";
    }, 1000); 
    box_link_1.style.display = "none";
    box_link_2.style.display = "none";
   
   
    

} );
link_3.addEventListener( 'click' , function () {

    box_1.style.maxWidth = "90%";
    activ_link.style.marginLeft = '86.6%';
    activ_link.style.width = '54px';
    box_link_0.style.display = "none"; 
    box_link_1.style.display = "block";
    box_link_2.style.display = "none";
    

    
    
} );

// setTimeout(() => {
//     icon_id.style.opacity = "1";
// }, 3000);



Message_animatsion.addEventListener( 'click' , function () {
    setTimeout(() => {


       text_Message_1.textContent = (`${textarea.value}`);
    setTimeout(() => {
        Message.style.display = "none";
        setTimeout(() => {
            Message_1.style.display = "block";
            setTimeout(() => {
                Message_4.style.display = "block";
            }, 1000);
        }, 100);
    }, 5000);

       Message_animatsion_1.style.transform = 'skew(10deg, 20deg)';
       setTimeout(() => {
        Message_animatsion_1.style.transform = 'skew(0deg, 0deg)';
       }, 1000);
       setTimeout(() => {
        Message_animatsion_1.style.transform = 'translate(100px, -100px)';
        setTimeout(() => {
            Message_animatsion_1.style.display = 'none';
            Message_animatsion.style.maxWidth = "250px";
            Message_animatsion.style.marginLeft = "16%";
            setTimeout(() => {
                Message_animatsion_span.style.display = "block"
            }, 1000);
        }, 1000);
       }, 1100);
        

    }, 1000);
} );


textarea.addEventListener( 'click' , function () {

    
    setTimeout(() => {
        input_Message.style.transform = "translateX(10px)";
        setTimeout(() => {
            input_Message.style.transform = "translateX(-10px)";
            setTimeout(() => {
                input_Message.style.transform = "translateX(0px)";
            }, 200);
        }, 200);
    }, 200);
   




} );


const Imgs = document.querySelectorAll(".Slider_box img");
const Btn = document.querySelector(".Slider_btn");
const Btn_1 = document.querySelector(".Slider_btn_1");


let Slid = 0;

function changeimg () {
    if (Slid > 4) {

        Slid = 0;
        
    } else if (Slid < 0) {

        Slid = 4;


    }
    Img.style.transform = `translateX(${-Slid * 400}px)`;
}

Btn.addEventListener( "click" , function change () {
    Slid++;

    changeimg ()

} );
Btn_1.addEventListener( "click" , function change () {
    Slid--;

    changeimg ()

} );


let Int = setInterval(runing, 5000);

function runing () {

    Slid++;

  changeimg ()

};

function rest() {

    clearInterval(Int)

};


const activ_Window = document.querySelector("#activ_Window");
const About_p = document.querySelector(".About_p");
const In = document.querySelector(".In");



// console.log(About_p_p);


// function About () {
//     alert("Hi !")
// }


About_p.addEventListener( 'click' , function () {
    activ_Window.style.transform = 'translateY(130px)';
    // setTimeout(() => {
    //     activ_Window.style.transform = 'translateY(-130px)';
    // }, 5000);

} );
In.addEventListener( 'click' , function () {


    activ_Window.style.transform = 'translateY(130px)';

    
} );


activ_Window.addEventListener( 'click' , function () {
    
    activ_Window.style.transform = 'translateY(-130px)';

} );