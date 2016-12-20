$( document ).ready(function() {

  $(".header").load('header.html');

});
//
  $(document).on("click", "#displayEvents", function(){
    $('body').load('events.html');
  });
  $(document).on("click", "#displayMembers", function(){
    $('body').load('members.html');
  });
  $(document).on("click", "#displayPartners", function(){
    $('body').load('partners.html');
  });
  // click on the dashboard
  $(document).on("click", "#dashboaradBtn", function(){
    $('body').load('admin.html');
  });

  // $(document).on("click", "#addEvent", function(){
  //   $('body').load('addEvent.html');
  // });
  $(document).on("click", "#addNewEvent", function(){
    // console.log('x');
    $('#addNewDiv').show();
  });

  $(document).ready(function(){
      $('.delete').click(function(){
          $(this).parent().remove();
          return false;
      });

  });

  // MEMBERS
$(document).on("click", "#saveMemberBtn", function(){
  var name = $("#name").val();
  var lastName = $("#lastName").val();
  var username = $("#username").val();
  var password = $("#password").val();
  console.log(name, lastName, username, password);

  var linkToApi = 'admin-api.php?cmd=save';
    console.log(linkToApi);
  //
  // $.getJSON(linkToApi, function(jData){
  //   console.log(jData);
  //   // display result from the if else statement from api  - > if it's saved properly
  //   // $('#showResult').html('<p class="">'+jData+'</p>');
  // });
});
