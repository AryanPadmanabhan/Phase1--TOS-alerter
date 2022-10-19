function phase1() {
     var webhookUrl = '';
     

var thread = GmailApp.getInboxThreads(0,1)[0]; // Get first thread in inbox
 var message = thread.getMessages()[0]; // Get first message
Logger.log("is unread? " + message.isUnread());
if (message.isUnread()) {
  var subget = message.getSubject(); 
  message.markRead();
}
else {
 return "no emails";

  
}
var myEmbed = {
  author: {
    name: subget
  },
  title: "Weekly Watchlist Alerts",
  description: ' ```fix\n+ ' + subget + '. It is approaching the breakout / breakdown level. ``` \n Check out <#717049214798135407> for the analysis.',

}


 Logger.log(subget + '. On watch @WeeklyWatchlist');
        var output = '\n*New Email*';
        output += '\n*from:* ' + message.getSubject() + '. On watch @WeeklyWatchlist';

        Logger.log(output);

        var payload = {
            'username': 'Signol',
            'content': '<@&948008386182664245>',
            'embeds': [myEmbed]
        };
  var options = {
    headers: {
      'Content-Type': 'application/json'
    },
            'method' : 'post',
            'payload' : Utilities.jsonStringify(payload),
        };

     
        UrlFetchApp.fetch(webhookUrl, options);
        
  

}
