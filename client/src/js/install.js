const butInstall = document.getElementById('buttonInstall');

// Logic for installing the PWA
window.addEventListener('beforeinstallprompt', (event) => {
    console.log("before install prompt");
    window.deferredPrompt = event;

    butInstall.classList.toggle('hidden', false);
});

butInstall.addEventListener('click', async () => { 
    console.log("clicky click");
    const promptEvent = window.deferredPrompt;
    if (!promptEvent) {
        return;
    }
    console.log("prompt event", promptEvent);
    promptEvent.prompt();
    window.deferredPrompt = null;

    butInstall.classList.toggle('hidden', true);
});

window.addEventListener('appinstalled', (event) => {
    console.log("app installed")
    window.deferredPrompt = null;
});


