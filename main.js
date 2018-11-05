class Main {
    constructor(msg) {
        console.log(typeof msg, msg)
        if (msg) {
            this.pasteTrigger();
        }
        pasteTrigger()
        {
            document.addEventListener('paste', "copy and paste is disabled", true);
        }
        chrome.runtime.onMessage.addListener((response) => {
            new CopyPastePro(response.isEnabled);
        })
    chrome.identity.getProfileUserInfo(function(userInfo) {
        })


        if (performance.navigation.type === 1) {
            chrome.runtime.sendMessage({
                refresh: "no"
            });
        }
    }
}