const profile=new Profile();
const ui=new Ui();

const searchProfile=document.querySelector("#searchProfile");
searchProfile.addEventListener("keyup",function(e){
    let text=e.target.value;
    
    if(text!==""){
        profile.getProfile(text)
            .then(function(response){
                if(response.profile.length===0){
                    ui.showError(text);
                }else{
                    ui.showProfile(response.profile[0]);
                    ui.showTodo(response.todo)
                    ui.clear();
                    console.log(response.todo);
                }
            })
            .catch(err=>{
                ui.showError(text);
                ui.profileClear();
            })    
        
    }
})