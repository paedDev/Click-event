
import styles from "./ProfilePicture.module.css"
function ProfilePicture () {
     const imageUrl = './src/assets/anime.jpg'

    const addClickListener=()=> {
        const img = document.querySelector("img")
        const p = document.querySelector("p")

        if (img && p) {
            img.addEventListener("click", () => {
                img.style.border = "2px solid red";
                p.style.backgroundColor = "red";
                p.style.color = "white"
                p.style.width = "100px"
                p.style.textAlign = "center"
                p.style.padding = "20px"
                    p.style.borderRadius = "10px"
            });
        }
        
    };
   

    // const handleCLick = (e) =>{
    //     e.target.style.display = "none"
        
        
    // }
    return (
        <>
        {/* <img onClick ={(e) =>handleCLick(e)} src={imageUrl} width="300px" alt="Anime" /> */}
        <img src={imageUrl} width="300px" alt="Anime" onLoad={addClickListener} />

        <p>
            hello
        </p>
        </>
    )
}

export default ProfilePicture;