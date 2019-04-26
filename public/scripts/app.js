console.log('sanity check')

// Close and Close & Reveal signUpPopUp
$('#signUpEsc').on('click', (e) => {
  $('.signUpPopUp').css('display', 'none');
});

$('#signUpButton').on('click', (e) => {
  $('.signUpPopUp').css('display', 'none');
  $('.formInput').css('display', 'flex');
});

// Close and Close & Reveal successResponse
$('#formEsc').on('click', (e) => {
  $('.formInput').css('display', 'none');
});

$('#submitButton').on('click', (e) => {
  $('.formInput').css('display', 'none');
  $('.successResponse').css('display', 'flex');
});

// Close and Close & Reveal Landing Page
$('#successEsc').on('click', (e) => {
  $('.successResponse').css('display', 'none');
});

$('#backToShopping').on('click', (e) => {
  $('.successResponse').css('display', 'none');
});


$('.submitButton').on('click', function (e) {
  e.preventDefault()
$.ajax({
  type: "POST",
  url: "/api/users",
  data: $('#hello').serialize(),
  success: function (json) {
    console.log(json)
  }
});
})
