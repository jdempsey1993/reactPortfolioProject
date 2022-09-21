import "./form.css"

const Form = () => {
    return (
        <form>

        <label className="colOne">
            First Name: 
            <input type="text" name="firstName"placeholder="First Name" required/>
        </label>

        <label className="colTwo">
            Last Name: 
            <input type="text" name="lastName"placeholder="Last Name"required/>
        </label>

        <label className="colOne">
            Phone number: 
            <input type="tel" name="phoneNum"placeholder="Write phone number"/>
        </label>

        <label className="colTwo">
            Email: 
            <input type="email" name="emailAd"placeholder="Write e-mail address"/>
        </label>

        <label className="colOneTwo">
            Message: 
            <textarea name="message" col="10" rows='10' placeholder="Write something here"required>
            
            </textarea>
        </label>

        <input type='submit' className="colOneTwo"></input>

        </form>
    )
}

export default Form
