    var SpeechRecognition = SpeechRecognition || webkitSpeechRecognition
    var SpeechGrammarList = SpeechGrammarList || webkitSpeechGrammarList
    var SpeechRecognitionEvent = SpeechRecognitionEvent || webkitSpeechRecognitionEvent

    // Create a new instance of SpeechRecognition
    var recognition = new webkitSpeechRecognition();

    recognition.continuous = true;


    recognition.lang = "en-US";

    // Fired when an error happens with the speech recognition
    recognition.onerror = function(event) {
        console.error(event);
    };
    // will run when the speech recognition 
    // service has began listening to incoming audio 
    recognition.onstart = function() {
        console.log('Speech recognition service has started');
    };
    const talk = document.querySelector('.talk');
    const voice2text = document.querySelector('.voice2text');

    function botVoice(message) {
        const speech = new SpeechSynthesisUtterance();
        if ((message.includes("first room"))) {
            speech.text = "OK! You've chosen the first room"
            window.open("https://stackoverflow.com/questions/15818892/chrome-javascript-window-open-in-new-tab")
        } else {
            speech.text = "OK! You've chosen the second room"
            window.open("https://dantri.com.vn/")

        }
        speech.volume = 1;
        speech.rate = 1;
        speech.pitch = 1;
        window.speechSynthesis.speak(speech)


    }

    recognition.onresult = function(event) {
        const current = event.resultIndex;

        const transcript = event.results[current][0].transcript;
        voice2text.textContent = transcript;
        botVoice(transcript)
    };
    // start the speech recognition 
    talk.addEventListener('click', () => {
        const speech = new SpeechSynthesisUtterance();
        speech.text = "Welcome to the Auto Join Zoom Meeting Extension. Please choose your room"
        $("#noti").append("<a href='#'>First room( Khoi's room)</a> " + "</br>" + "<a href='#'>Second room( Duy Anh's room) </a>")
        window.speechSynthesis.speak(speech)

        recognition.start();
    })