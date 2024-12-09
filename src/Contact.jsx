import "./Contact.css"


function Contact(){
    return(
        <div class="contactSection">
        <div class="contactContainer">
            <div class="contactText">
                <h1>Contact Us</h1>
                <p>Do you wish to speak to a recruiter, Training Consultant or have general enquiries?
                    Fill the form below and representative will be in touch with you.
                </p>
            </div>
            <div class="contactForm">
                <div class="contactField">
                    <label for="name" class="contactLabel">Name</label>
                    <input type="text"/>
                </div>
                <div class="contactFlex">
                    <div class="contactField text" >
                        <label for="email">Email</label>
                        <input type="email"/>
                    </div>
                    <div class="contactField text">
                        <label for="number">Phone Number</label>
                        <input type="tel" />
                    </div>
                    
                </div>
                <div class="contactFlex">
                    <div class="contactField text">
                        <label for="company">Company</label>
                        <input type="text"/>
                    </div>
                    <div class="contactField text">
                        <label for="industry">Industry</label>
                        <input type="text"/>
                    </div>
                </div>
                <div class="contactField">
                    <label for="job">Job Title</label>
                    <input type="text"/>
                </div>
                <div class="contactField">
                    <label for="programming">What Programming Language do you need enginners in?</label>
                    <input type="text"/>
                </div>
                <div class="contactField">
                    <label for="engineer">How many engineers do you need?</label>
                    <input type="number"/>
                </div>
                <div class="contactField">
                    <label for="enquiry">Enquiry(optional)</label>
                    <textarea name="" id="" cols="30" rows="10"></textarea>
                </div>
            </div>
            <button>Submit</button>
        </div>
        
    </div>
    )
}

export default Contact