 function ageCalculator() {  
    var userinput = document.getElementById("DOB").value;  
    var dob = new Date(userinput);  
    if(userinput==null || userinput=='') {  
      document.getElementById("message").innerHTML = "**Choose a date please!";    
      return false;   
    } else {  
      
    //calculate month difference from current date in time  
    var month_diff = Date.now() - dob.getTime();  
      
    //convert the calculated difference in date format  
    var age_dt = new Date(month_diff);   
      
    //extract year from date      
    var year = age_dt.getUTCFullYear();  
      
    //now calculate the age of the user  
    var age = Math.abs(year - 1970);  
      
    //display the calculated age  
    document.getElementById("result").innerHTML = "Age is: " + age + " years. ";  
    }  
} 
function validate() {
    var name =document.forms.RegForm.firstname.value;
    var lastname =document.forms.RegForm.lastname.value;
    var email = document.forms.RegForm.EMail.value;
    var phone =document.forms.RegForm.Telephone.value;
    var policy = document.forms.RegForm.Subject.value;
    var policyfor = document.forms.RegForm.Subject1.value;
    var password =document.forms.RegForm.Password.value;
    var address =document.forms.RegForm.Address.value;
    var aadhar = document.forms.RegForm.aadhar.value;
    var regaadhar = /^\d{16}$/;
    var regEmail=/^([A-Za-z0-9_\-\.])+\@([gmail|GMAIL])+\.(com)$/;  //Javascript reGex for Email Validation.
    var regPhone=/^\d{10}$/;                                        // Javascript reGex for Phone Number validation.
    var regName = /^[A-Za-z]{3,20}/;
    var reglast = /^.[A-Z]{1}$/;    // Javascript reGex for Name validation

    if (name == ""|| !regName.test(name)) {
        alert("Please enter your Valid Name .");
        return false;
    }
    else if(!reglast.test(lastname))
    {
        alert("Please Enter last Name as . followed by Letter (.G)")
        return false;
    }
    else if (phone == "" || !regPhone.test(phone)) {
        alert("Please enter valid phone number.");
        return false;
    }
    else if (email == "" || !regEmail.test(email)) {
        alert("Please enter a valid g-mail address.");
        return false;
    }
    else if (password =="") {
        alert("Please enter your password");
        return false;
    }
    else if(password.length <6){
        alert("Password should be atleast 6 character long");
        return false;
    }
    else if (address == "") {
        alert("Please enter your address.");
        return false;
    }
    else if(aadhar=="" || !regaadhar.test(aadhar))
    {
        alert("Please Enter Your Valid AadharCard Number")
    }
    else if (policy =="") {
        alert("Please Choose any policy.");
        return false;
    }
    else if (policyfor =="") {
        alert("Please Select the Policy for.");
        return false;
    }

    return true;
}

 
