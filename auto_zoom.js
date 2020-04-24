function createAlarm() {
    var now = new Date();
    var day = now.getDate();
    if (now.getHours() > 12) {
        // 3 AM already passed
        day += 1;
    }
    // '+' casts the date to a number, like [object Date].getTime();
    var timestamp = +new Date(now.getFullYear(), now.getMonth(), day, 12, 0, 0, 0);
    //                        YYYY               MM              DD  HH MM SS MS

    // Create
    chrome.alarms.create('Ready to go zoom', {
        when: timestamp
    });
}
createAlarm();
// Listen
chrome.alarms.onAlarm.addListener(function(alarm) {
    if (alarm.name === 'Ready to go zoom') {
        var url = 'https://us04web.zoom.us/j/8545732738';
        chrome.tabs.query({
            url: url
        }, function(tabs) {

            chrome.tabs.create({ url: url, active: true });

        });
    }
});