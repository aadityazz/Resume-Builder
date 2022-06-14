import {Button} from "react-bootstrap";
import resume from "./resume/resume";

const button = () => {
    const ifClick = () => {
        console.log("ifClick()")
    }
    return(
        <Button onClick={ifClick} variant="dark" size="lg" active>Download</Button>
    )
};

export default button()



