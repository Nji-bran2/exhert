import React, {useState} from "react";
import cn from "classnames";
import styles from "./Form.module.sass";
import axios from "axios"
import { toast } from "react-toastify";

// import Icon from "../Icon";

const Form = ({
  className,
  big,
  onSubmit,
  placeholder,
  value,
  setValue,
  type,
  name,
}) => {

    const [data, setData] = useState({
      email: ""
    });


    const handleChange = (e) => {
      setData({...data , [e.target.name]: e.target.value});
    }


    const handleSubmit = async (e) => {
      e.preventDefault();

     const headers = {
        'Content-Type': 'application/x-www-form-urlencoded; charset=UTF-8'
     }

      try {
         const response = await axios.post("http://localhost:8000/subscribe/signup", data
          //const response = await axios.post("https://email.subscription-v64o.onrender.com/subscribe/signup", data
          , {headers}
         );
         console.log(response.data);
         if (response.data.message === "Signed up for mailing list") {
           toast.success(response.data.message);
         } else if (response.data.message === "This email is in use") {
           toast.warn(response.data.message, { className: styles["toast-warning"] });
         }
      } catch (error) {
        console.error(error);
        toast.error(error.message);
      }
    };

  return (
    <form
      className={cn(className, styles.form, {
        [styles.big]: big,
      })}
      onSubmit={handleSubmit}
    >
      <input
         className={styles.input}
         value={data.email}
         onChange={(e) => handleChange(e)}
         placeholder="Enter your email"
         type="email"
         name="email"
        required
      />
      <button className={cn("button",styles.btn)}>
        Join Waitlist
      </button>
    </form>
  );
};

export default Form;