document.addEventListener('click',e);

function e (){
    fetch("module5.json")
    .then(response => {
        if (response.ok){
            return response.json();
        } else {
            throw new Error ("Failed to get degree data")
        }
    })
    .then(data => {
        document.getElementById("degrees").innerHTML = JSON.stringify(data);
        
        console.log("status:",data.status); 
        console.log("data:",data)
    })
    .catch(error => {
        alert("fetch failed")
        console.error(error);
    });
    console.log("finished fetch");
};