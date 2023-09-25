$(function(){
    getPeople()
});

const getPeople = async () =>{
    $.ajax({
        url: "https://swapi.dev/api/people",
        success: function( result ) {
          console.log(result)
        }
      });
}