function search(){
   let inputPanel=document.getElementById("input");

   let movieName=inputPanel.value;

    const htmlRequest=new XMLHttpRequest();

    let url = "https://www.omdbapi.com/?apikey=1c829bba&t=" + movieName; 


    htmlRequest.open("GET",url)

    htmlRequest.responseType="json";

    htmlRequest.send();

    htmlRequest.onload=function(){
        console.log(htmlRequest.response);
        let poster=document.getElementById("poster");
        poster.src=htmlRequest.response.Poster;

        let title=document.getElementById("title");
        title.innerHTML=htmlRequest.response.Title;

        let year=document.getElementById("year")
        year.innerHTML=htmlRequest.response.Year;
    }
}




