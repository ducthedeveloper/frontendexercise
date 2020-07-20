function login(password, username){
    if (password === 'password' && username === 'username') {
        return {
            status: 200,  // OK
            data: "id"
        }
    }
    else{
        return{
            status: 404,
            data: null
        }
    }
}

export default login;