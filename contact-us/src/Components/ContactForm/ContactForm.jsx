import styles from "./ContactForm.module.css";
import Button from "../Button/Button";
import { MdCall, MdMessage } from "react-icons/md";
import { HiMail } from "react-icons/hi";

const ContactForm = () => {

  const onSubmit = (event) => {
    console.log(event.target[0].value);
  }

  return (
    <section className={styles.container}>
        <div className={styles.contact_form}>
          <div className={styles.top_btn}>
              <Button 
                text = "VIA SUPPORT CHAT" 
                icon = {<MdMessage fontSize="24px"/>}  
              />
              <Button 
                text = "VIA CALL"
                icon = {<MdCall fontSize="24px"/>}
              />
          </div> 
          <Button 
            isOutline = {true}
            text = "VIA EMAIL FORM"
            icon = {<HiMail fontSize="24px"/>}
          />
          <form onSubmit={onSubmit} action="submit">
            <div className={styles.form_control}>
              <label htmlFor="name">Name</label>
              <input type="text" name="name" placeholder=""/>
            </div>
            <div className={styles.form_control}>
              <label htmlFor="email">Email</label>
              <input type="enail" name="email" placeholder=""/>
            </div>
            <div className={styles.form_control}>
              <label htmlFor="name">TEXT</label>
              <textarea type="text" name="name" rows={8} placeholder=""/>
            </div>
            <div style={{
              display: "flex",
              justifyContent: "right",
            }}>
              <Button 
                text = "SUBMIT"
              />
            </div>
          </form>
        </div>
        <div className={styles.contact_image}>
          <img src="images/service.svg" alt="" />
        </div>
    </section>
  )
}

export default ContactForm