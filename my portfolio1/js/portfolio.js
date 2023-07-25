function closeNav(){
  document.getElementById(ul).style.display = "none"
}

function Opensec4(){
  document.getElementById('#section4').style.display = "block"
}


var typingEffect = new Typed(".text", {
    strings:["Adebola", "a Freelancer", "a Web Developer", "a Front end Developer", "a Back end Developer"], 
    typeSpeed: 100,
    backSpeed: 100,
    backDelay: 1000,
    loop:true
});



/* Open when someone clicks on the span element */
// function openNav() {
//   document.getElementById("myNav").style.width = "100%";
// }

// /* Close when someone clicks on the "x" symbol inside the overlay */
// function closeNav() {
//   document.getElementById("myNav").style.width = "0%";
// }
// /* Open */
// function openNav() {
//   document.getElementById("myNav").style.height = "100%";
// }

// /* Close */
// function closeNav() {
//   document.getElementById("myNav").style.height = "0%";
// }
// function openNav() {
//   document.getElementById("myNav").style.display = "block";
// }

// /* Close */
// function closeNav() {
//   document.getElementById("myNav").style.display = "none";
// }




//  $(document).ready(function(){
//   $('ul').click(function(){
//       $('ul').hide(1000);   
//   })
//   $('.checkbtn').click(function(){
//     $('ul').show(".checkbtn");   
// })
//   // $('.checkbtn').click(function(){
  //   $('#check').show(); 
  // })

  // $("#toggleclass").click(function(){
  //   $("h1,h2").toggleClass("test");
  // })
//     $('p:first').click(function(){
//       $('#check').hide();
//       alert("we are cool")
//  })
//  })





//  function sendEmail(){
//     Email.send({
//        SecureToken: "da9bdbc6-f099-419f-a300-64677a1cce10",
//        To: 'kcexpertng@gmail.com',
//        From: document.getElementById("email").value,
//       Subject: "New Contact Form Enuiry",
//       Body: "Name: " + document.getElementById("name").value
//       + "<br> Email: " + document.getElementById("email").value
//       + "<br> Phone no: " + document.getElementById("phone").value
//       + "<br> Message: " + document.getElementById("message").value
//   }).then(
//      message => alert(message) 
//   );
//  }

// function sendEmail(){
//    var params = {
//       from_name : document.getElementById("fullName").value,
//       email_id : document.getElementById("email_id").value,
//       message : document.getElementById("message").value
//    }
//    emailjs.send("service_eod5eju", "template_d4a0jgr", params).then(function(res){
//       alert("Success" + res.status);
//    })
// }

const btn = document.getElementById('button');

document.getElementById('contact-form')
 .addEventListener('submit', function(event) {
   event.preventDefault();

   btn.value = 'Sending...';

   const serviceID = 'default_service';
   const templateID = 'template_d4a0jgr';

   emailjs.sendForm(serviceID, templateID, this)
    .then(() => {
      btn.value = 'Send Email';
      alert('Sent!');
    }, (err) => {
      btn.value = 'Send Email';
      alert(JSON.stringify(err));
    });
});

// var submit = document.getElementById('submit');
// btn.addEventListener('click', function(e){
//   e.preventDefault()
//   var name = document.getElementById('name').value;
//   var email = document.getElementById('email').value;
//   var subject = document.getElementById('subject').value;
//   var message = document.getElementById('message').value;
//   var body = 'name: ' +name + '<br/> email: ' + email + '<br/> subject: ' +subject + '</br/> message: ' + message; 

//    email.send({
//   SecureToken: "da9bdbc6-f099-419f-a300-64677a1cce10",
//       To: 'kcexpertng@mail.com',
//       From: "kc4real1z@gmail.com",
//       Subject: "New Contact Form Enuiry",
//       Body: body 
//     }).then(
//         message => alert(message) 
//      );
//     })


  // $(function(){
    //     $(".typed").typed({
    //         strings: ["Frontend Developer", "Web Developer", "UI/UX Designer"],
    //         stringsElement: null,
    //         typeSpeed: 30,
    //         startDelay: 1200,
    //         backSpeed: 20,
    //         backDelay: 500,
    //         loop:true,
    //         loopCount: 5,
    //         showCursor: false,
    //         cursorChar: "|",
    //         attr: null,
    //         contentType: 'html',
    //         callback: function() {},
    //         preStringTyped: function() {},
    //         onStringTyped: function() {},
    //         resetCallback: function() {}
    //     });
    // });