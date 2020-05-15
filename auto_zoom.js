function createAlarm() {
    var now = new Date();
    var day = now.getDate();
    if (now.getHours() > 23) {
        // 3 AM already passed
        day += 1;
    }
    // '+' casts the date to a number, like [object Date].getTime();
    var timestamp = +new Date(now.getFullYear(), now.getMonth(), day, 23, 37, 0, 0);
    //                        YYYY               MM              DD  HH MM SS MS

    // Create
    chrome.alarms.create('Ready to go zoom', {
        when: timestamp
    });
}
//begin
console.log("Our extension has been loaded!");
createAlarm();
// Listen
chrome.alarms.onAlarm.addListener(function(alarm) {
    if (alarm.name === 'Ready to go zoom') {
        popW = 200;
        popH = 200;

        window.open('auto_zoom.html', 'popup', 'width=' + popW + ',height=' + popH + ', scrollbars=yes');
        console.log('done')
    }
});