
function sendEmailsToDiscordV4() {
     var webhookUrl = 'https://discord.com/api/webhooks/948007693275263038/KCG_mXIti8rB__fJvFgciP_3mDZUtlSIn5u2To-IsfSMZrQMpB1VIGS9_s_s5wXTK5zn';
     

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



 Logger.log(subget + '. On watch @WeeklyWatchlist');
        var output = '\n*New Email*';
        output += '\n*from:* ' + message.getSubject() + '. On watch @WeeklyWatchlist';

        Logger.log(output);

        var payload = {
            'username': 'Signol',
            'content': subget + '. It is approaching the breakout level. On watch <@&948008386182664245>. Check out <#717049214798135407> for the breakdown.'
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
