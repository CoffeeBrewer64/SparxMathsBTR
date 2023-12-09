(function () {
    async function loadScript(url, async = false) {
        const scriptElement = document.createElement("script");
        scriptElement.src = url;
        scriptElement.async = async;

        // Appending the script to the document head, body, or root element
        (document.head || document.body || document.documentElement).appendChild(scriptElement);
    }

    // Loading the "main.js" script from the Chrome runtime URL
    loadScript(window.chrome.runtime.getURL("main.js"));
})();