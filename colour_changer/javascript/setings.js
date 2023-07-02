const getColor = () =>{

    const randomNumber = Math.floor(Math.random()*16777215);
    /*we have multiplyied by 16777215 to convert random number into haxadecimal number
    as the colours are in hexadecimal number*/
    const colorCode = "#" + randomNumber.toString(16);
    /* toString(16)  will convert the randdomNumber to string and will convert the 
    number into hexadecimal number*/
    console.log(colorCode);
    console.log(randomNumber);

    document.body.style.backgroundColor = colorCode;
    // this will go to our document (i.e html title) then will go to html body then
    // style(i.e css) and in body's backgroudnColor and change it to colorcode

    document.getElementById("color-code").innerText = colorCode;
    // this will change the hex code of the colour

    // Now if we want to copy the code as we click on the button then:
    navigator.clipboard.writeText(colorCode);
}

//event call :this will work by clicking on the button
document.getElementById("btn").addEventListener("click",getColor);

//init call or inetial call: it will run when the page is loaded
getColor();
// even if we don't call this function we will be able to do all the reqirments
// but if we want to have a colour in backgrount from the begning itself then we need
// to call this function