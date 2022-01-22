const url ="localhost:3001/api/user/signup";

const signUp = async (first,last,number,email,pass,confirmPass) => {
    const data={FirstName:first,LastName:last,Email:email,PhoneNumber:number,Password:pass,ConfirmPassword:confirmPass};
    const respone= await fetch(url,{
        method:'POST',
        headers:{
            'Content-Type':'application/json'
        },
        body:JSON.stringify(data)
    });

    console.log(respone.json());
}

export default signUp;