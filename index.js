let passlength = document.getElementById("passlength")
let Password = document.getElementById("Password")

function generatepass(pass){
    const keyword = "abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789!@#$%^&*()_+"

    let isipass = ""

    for(let i = 0; i < pass ;i++){
        isipass += keyword[Math.floor(Math.random() * keyword.length)]
    }
    return isipass
}

function getpassword(){
    const newpass = generatepass(passlength.value)
    
Password.value = newpass


}

function savepassword(){
const title = Password.value
    saveButton.setAttribute("href", "data:text/plain;charset=utf-8," + encodeURIComponent(`Password : ${title}`))
    saveButton.setAttribute("download", "MyPasswordGeneratorLOG.txt")
    saveButton.click()

}

