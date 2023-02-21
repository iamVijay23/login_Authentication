function validate()
{
    let username = document.getElementById('username');
    let password= document.getElementById('password');

    if(username=="admin" && password=="1234")
    {
        alert("Login successful!");
        return false;
    }
    else 
    {
        alert("login failed Please Try Again ");
    }

}