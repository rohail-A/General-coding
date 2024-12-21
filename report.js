document.addEventListener('DOMContentLoaded', function () {
    const urlInput = document.getElementById('urlInput');
    const loadButton = document.getElementById('loadButton');
    const backButton = document.getElementById('backButton');
    const forwardButton = document.getElementById('forwardButton');
    const iframe = document.getElementById('webPage');

    let historyStack = [];
    let historyIndex = -1;

   
    function loadURL(url) {
        if (!url.startsWith('http://') && !url.startsWith('https://')) {
            url = 'http://' + url;
        }
        iframe.src = url;
        historyStack.push(url);
        historyIndex++;
        toggleButtons();
    }

  
    function navigateBack() {
        if (historyIndex > 0) {
            historyIndex--;
            iframe.src = historyStack[historyIndex];
            toggleButtons();
        }
    }

   
    function navigateForward() {
        if (historyIndex < historyStack.length - 1) {
            historyIndex++;
            iframe.src = historyStack[historyIndex];
            toggleButtons();
        }
    }

    
    function toggleButtons() {
        if (historyIndex > 0) {
            backButton.disabled = false;
        } else {
            backButton.disabled = true;
        }

        if (historyIndex < historyStack.length - 1) {
            forwardButton.disabled = false;
        } else {
            forwardButton.disabled = true;
        }
    }

   
    loadButton.addEventListener('click', function () {
        loadURL(urlInput.value);
    });

    urlInput.addEventListener('keypress', function (e) {
        if (e.key === 'Enter') {
            loadURL(urlInput.value);
        }
    });

  
    backButton.addEventListener('click', navigateBack);

    forwardButton.addEventListener('click', navigateForward);

  
    toggleButtons();
});
