window.onload = () => {
    const button = document.querySelector("#win")

    button.addEventListener("click", () => {
        createWindow()

    }
    )
}

async function createWindow() {

    return await fin.Window.create(winOption);
}

const winOption = {
    name: 'child',
    defaultWidth: 300,
    defaultHeight: 300,
    url: 'http://localhost:3000/link.html',
    frame: true,
    autoShow: true,
    contentCreation: {
        rules: [
            {
                match: ['<all_urls>'],
                behavior: 'window',
                options: {
                    permissions: {
                        System: {
                            launchExternalProcess: true
                        }
                    }
                }
            }
        ]
    }
}
