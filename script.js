
class Sequence{
    constructor(nr){
        this.buttonsNode = document.querySelectorAll(".buttons"+nr)[0];
        this.buttons = [];

        [...this.buttonsNode.children].forEach(b => {
            this.buttons.push(b);
        });

        this.sound = audioSources[nr];
  
        this.main();     
    }

    main(){ 
        this.buttons.forEach(b=>{
            b.addEventListener("click", (e)=>{
            var v = invert(b.getAttribute("data-on"));
            b.setAttribute("data-on", v);    

            console.log(b.getAttribute("data-on"))
           
            if(toBool(b.getAttribute("data-on")))
                e.target.style.backgroundColor="#444";
                // else
                //  //color if BOTH select column and trigger
                // e.target.style.backgroundColor="red";     
            })    
        })         
    }

    playSound(){
        this.trig= this.buttons[count].getAttribute("data-on");

        this.buttons.forEach(b =>{
            if(b.getAttribute("data-on") == "1")
            b.style.backgroundColor="#444"
            else
            b.style.backgroundColor="white"
        })

        if(this.trig==1){
            this.sound.play();
            this.sound.currentTime=0;
        }

        this.buttons[count].style.backgroundColor="#EEE";
    }
}

// #9c9723
/* -------------------MAIN ---------------------*/
    
    const reset = document.querySelector(".rows button");
    console.log(reset)
    reset.addEventListener('click', ()=>{
        console.log("hi");
        location.reload();
// return false;
    })
   
    // const allButtonsNode = document.querySelectorAll(".btns>*");
    // // console.log(allButtonsNode);
    // allButtonsNode.forEach(b=>{
    //     console.log(b);
    //     // window.location.reload()
    //     // b.setAttribute("data-on","0")
    // })



    // allButtons.forEach(b =>{
    //     b.setAttribute("data-on","0");      
    // })

    var count=0;

    function invert(v){
        if(v=="1")
        return "0"
        else
        return "1"
    }

    function toBool(v){
        if(v=="1")
        return true
        else if(v=="0")
        return false
    }


    const audioSourcesNode= document.querySelectorAll(".audio-sources")[0];
    const audioSources=[];

    [...audioSourcesNode.children].forEach(a => {
        audioSources.push(a);
    });
    audioSources.reverse();




    const sequence0 = new Sequence("0");
    const sequence1 = new Sequence("1");
    const sequence2 = new Sequence("2");
    const sequence3 = new Sequence("3");
    const sequence4 = new Sequence("4");
    const sequence5 = new Sequence("5");
    const sequence6 = new Sequence("6");
    const sequence7 = new Sequence("7");
    

    setInterval(()=>{
        count++; 
        count=count % 8; 
      
         sequence1.playSound();
         sequence2.playSound();
         sequence3.playSound();
         sequence4.playSound();
         sequence5.playSound();
         sequence6.playSound();
         sequence7.playSound();
         sequence0.playSound();
    }, 300);




   
 


