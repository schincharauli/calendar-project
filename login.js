

const user = document.querySelector("#user");
user.addEventListener('keyup', function(){
    const u_times = document.querySelector('.u_times');
    const u_check = document.querySelector('.u_check');
    if (user.value.length == 0 || user.value.length < 6) { 
        user.style.border = '1px solid red';
        u_times.style.display = 'block';
        u_check.style.display = 'none';
        return false;
    } else {
        user.style.border = '1px solid green';
        u_times.style.display = 'none';
        u_check.style.display = 'block';
    }
}) 


const pass = document.querySelector("#pass");
pass.addEventListener('keyup', function() {
    const u_times = document.querySelector('.p_times');
    const u_check = document.querySelector('.p_check');
    if (pass.value.length == 0 || pass.value.length < 8) { 
        user.style.border = '1px solid red';
        u_times.style.display = 'block';
        u_check.style.display = 'none';
        return false;
    } else {
        user.style.border = '1px solid green';
        u_times.style.display = 'none';
        u_check.style.display = 'block';
    }
})

function validate() {
    if (user.value == 0 || user.value.length < 6) {
        document.getElementById('error').innerHTML = 'Please fill the required fields!';
        return false;
    } else if (pass.value == 0 || pass.value.length < 8) {
        document.getElementById('error').innerHTML = 'Please fill the required fields!';
        return false;
    } else {
        alert("Succesfully logged in");
    }
}