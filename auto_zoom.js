function createAlarm() {
    var now = new Date();
    var day = now.getDate();
    if (now.getHours() >= 22) {
        // 3 AM already passed
        day += 1;
    }
    // '+' casts the date to a number, like [object Date].getTime();
    var timestamp = +new Date(now.getFullYear(), now.getMonth(), day, 3, 0, 0, 0);
    //                        YYYY               MM              DD  HH MM SS MS

    // Create
    chrome.alarms.create('Ready to go zoom', {
        when: timestamp
    });
}

// Listen
chrome.alarms.onAlarm.addListener(function(alarm) {
    if (alarm.name === 'Ready to go zoom') {
        var url = 'https://dantri.com.vn/';
        chrome.tabs.query({
            url: url
        }, function(tabs) {
            if (tabs.length === 0) {
                chrome.tabs.create({ url: url, active: true });
            } else {
                // Focus first match
                chrome.tabs.update(tabs[0].id, { active: true });
            }
        });
    }
});
createAlarm();