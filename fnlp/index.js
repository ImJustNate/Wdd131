
function submitForm(event) {
    event.preventDefault();

    let name = document.getElementById("name").value;
    console.log(name)

    let address = document.getElementById("address").value;
    console.log(address)

    let apt = "";
    if (document.getElementById("apt").value){
        apt = `\nApt. ` + document.getElementById("apt").value;
        console.log(apt)
    }
    let city = document.getElementById("city").value;
    console.log(city)

    let state = document.getElementById("state").value;
    console.log(state)

    let zip = document.getElementById("zip").value;
    console.log(zip)

    let email = document.getElementById("email").value;
    console.log(email)

    let phone = document.getElementById("phone").value;
    console.log(phone)
    
    let namePermission = "";
    if (document.getElementById("namePermission").checked){
        namePermission = "You have my permission to list your name as a Friends supporter on your website or in your publications.\n";
        console.log(namePermission)
    }

    let volunteer = ""
    if (document.getElementById("volunteer").checked){
        volunteer = "I would like to be contacted about volunteer opportunities.\n";
        console.log(volunteer)
    }

    var today = new Date();
    var dd = String(today.getDate()).padStart(2, '0');
    var mm = String(today.getMonth() + 1).padStart(2, '0'); //January is 0!
    var yyyy = today.getFullYear();

    today = mm + '/' + dd + '/' + yyyy;
        // let response = 
    let message = `${today }\n\nHi Friends of Neill Public Library, \n\n`+
        `Thank you for all you do!\n` +
        `${namePermission}` +
        `${volunteer}` +
        `You can email me at ${email}, call me at ${phone} or send a letter to: \n${name}\n${address}${apt}\n${city}, ${state} ${zip}` +
        `\n\n Thanks,\n ${name}`;
        
    console.log(message);

    getMailtoUrl(message);

}

function getMailtoUrl(body) {
    var args = [];
    
    args.push('subject=' + encodeURIComponent("Joining FNPL"));
    
    if (typeof body !== 'undefined') {
        args.push('body=' + encodeURIComponent(body))
    }

    var url = 'mailto:' + encodeURIComponent("pullmanfnpl@gmail.com");
    if (args.length > 0) {
        url += '?' + args.join('&');
    }
    window.location.href = url;
    return url;
}

const form = document.getElementById("joinSection");
form.addEventListener("submit", submitForm);