/* anonymizes the username(local part) of an email ID, that is, 
replace the username part with * characters.
*/
const emails = ['mary@northeastern.edu', 'ari@khoury.northeastern.edu', 'jk_neu.edu', 'jk@neu.edu', 'jsned@', 'ai_me@mugar.northeastern.edu'];
const anomalizedEmails = []
window.onload = function hideEmail() {
    const list = document.getElementById('emails')
    list.innerHTML += '\n';
    for (const email of emails) {
        if(email.match(/^[a-zA-Z0-9_]+@(.+\.)*northeastern.edu$/)) {
            let indexOfAt = email.indexOf("@")
            list.innerHTML += email.replace(/^[^@]*/, match => '*'.repeat(match.length));
        }      
    }
    
}