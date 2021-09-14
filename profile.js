class Profile{
    constructor(){
        this.clientId="";
        this.clientSecret="";
    }

    async getProfile(text){
        const usersResponse=await fetch(`https://jsonplaceholder.typicode.com/users?username=${text}`);
        const profile=await usersResponse.json();

        const todoResponse=await fetch(`https://jsonplaceholder.typicode.com/todos?userId=${profile[0].id}`)
        const todo=await todoResponse.json();

        return {
                profile,
                todo
            };
    }
    
}