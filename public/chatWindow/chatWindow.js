
document.getElementById('sendMessage').addEventListener('click',async()=>{
    try{
        const message=document.getElementById('message').value;
        const messageObj={
            message:message
        }
        console.log(message)
        if(message){
            const token = localStorage.getItem('token');
            const messageResponse=await axios.post(`/chat/postChat`,messageObj,{headers:{"authorization":token}});
            console.log(messageResponse);
        }
        document.getElementById('message').innerHTML="";
    } catch(err){
        console.log(err);
    }
})

// async function peopleStatus() {
//     try{
//         const users=await axios.get('/peopleStatus')
//         const userList = document.getElementById('peopleStatus');
//         userList.innerHTML = '';
//         users.forEach(user => {
//             const li = document.createElement('li');
//             li.textContent = user;
//             userList.appendChild(li);
//         });
//     }catch(err){
//         console.log(err);
//     }
// }

async function allMessage() {
    try{
        const messages=await axios.get('/chat/getChat');
        const messageList = document.getElementById('allMessage');
        messages.data.forEach(message => {
            const li = document.createElement('li');
            li.innerHTML =`name : ${message.name} - message : ${message.chat}`
            messageList.appendChild(li);
        });
    }catch(err){
        console.log(err);
    }
}

window.addEventListener('DOMContentLoaded', async () => {
    try{
        //peopleStatus();
        allMessage();
    }catch(err){
        console.log(err)
    }
})
