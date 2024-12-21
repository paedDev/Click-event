
import Button from "./components/Button/Button";
import ProfilePicture from "./components/ProfilePicture/ProfilePicture";
import ButtonClicked from "./components/ButtonClicked/ButtonClicked";


function App () {
  return (
    <>
    <Button/>
    <ProfilePicture/>
    <ButtonClicked cardname = {"2019 Program"} course = {"CPE"} description = {"hopefully I will graduate this next year "}/>

    <ButtonClicked cardname = {"2019 Program"} course = {"CPE"} description = {"hopefully I will graduate this next year "}/>

    </>
  )
}

export default App;