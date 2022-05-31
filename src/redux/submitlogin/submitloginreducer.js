import axios from "axios";
import { Loginclickfun } from "../login/action";
const SubmitLoginreducer = (loginobj) => (store) => {


    // setloginloading(true)


    axios.post("http://localhost:9876/login", { ...loginobj })
        .then((res) => {
            console.log(res.data, "res.data")

            if (res.data.message) {
                alert(res.data.message)
            }
            else if (res.data._id) {
                localStorage.setItem("userdetails", JSON.stringify(res.data));
                store.dispatch(Loginclickfun(false))

            }
        })
        .catch((err) => {
            console.log(err.response.data)
            let errors = err.response.data.errors[0].msg;
            if (errors) {

                alert("Enter valid username and password")
            }

        })
        .finally(() => {
            // setloginloading(false)
        })




}
export default SubmitLoginreducer