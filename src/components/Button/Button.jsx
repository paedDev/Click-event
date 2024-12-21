import styles from "./Button.module.css"

function Button (){

    //ondobule click
    // dont forget the arrow function inside 
    

    // let count = 0;
    // const handleCLick = (name) =>{ 
    //     if (count < 3){
    //         count++;
    //         console.log(`${name} you clicked me at ${count} time/s`);
            
    //     } else{
    //         console.log(`${name} Stop Clicking Me`);
            
    //     }
    // }
    // const button = document.querySelector("button");
    // const p = document.querySelector("p");
    // button.addEventListener("click",() =>{
    //     p.textContent = "ako to";
    //     button.textContent = "hello"
    // })
    // const handleClick = (e) =>{
    //     e.target.textContent = "OUCH ME ";
    //     console.log(e);
        
        
    
    // const handleClick2 = (name) =>{
    //     console.log(`${name} stop clicking me`);
        
    // }


    const handleCLick3 = (e) =>{
        e.target.textContent = "hello"
    
    }
    return(
        <>
        <button onDoubleClick={(e) => handleCLick3(e) }>
            Double click
        </button>
        {/* <button onDoubleClick={(e) => handleClick(e)}>

        click em dudde
        </button> */}


        {/* <p>
            hellow
        </p> */}


        {/* <button onClick={() => handleCLick("jan")}>
            Click Me 🥺
        </button> */}

        {/* <button onClick={handleClick2("Bro")}>
            Click Me 🥺
        </button>

        <button onClick={() => handleClick2("Jan Neol S. Paed")}>
            Click to show your name
        </button> */}

        
        </>
    )
}



export default Button;