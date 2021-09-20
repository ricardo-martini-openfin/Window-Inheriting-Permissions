
window.onload = ()=> {

document.querySelector("button").addEventListener("click", () => {
    fin.System.launchExternalProcess({
        path: 'notepad',
        arguments: '',
        listener: function (result) {
            console.log('the exit code', result.exitCode);
        }
    }).then(processIdentity => {
        console.log(processIdentity);
    }).catch(error => {
        console.log(error);
    });
})
}

