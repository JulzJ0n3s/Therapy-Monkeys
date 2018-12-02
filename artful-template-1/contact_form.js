
function sendMail(str) {
    var link = "mailto:miss.julia.m.jones@gmail.com" + "&subject=" + escape("Artful_form_submission") + "&body=" + escape(str);
    location.href = link;
}
function submit_comment() {
    var firstname = document.forms["contact_form"]["firstname"].value;
    var email = document.forms["contact_form"]["email"].value;
    var subject = document.forms["contact_form"]["subject"].value;

if((firstname !="") && (email !="") && (subject !="") {
   sendMail("HELLO");
}
}
function {alert ("we have now submitted your contact details and comments we hope to be in touch with you soon.");
}
  console.log(sendMail);
}
