#Azure Notifications Hub

This is my intent in following testing notifications hub with azure's TodoList Notification example.

You can check the original link here: 
- https://github.com/Azure/mobile-services-samples/tree/master/TodoListNotifications
- http://blogs.msdn.com/b/azuremobile/archive/2014/06/17/push-notifications-to-phonegap-apps-using-notification-hubs-integration.aspx

Pre-requisites and configurations can be found in the links posted above.

This repo has the latest MobileServices.Web ( v. 1.2.5 ) as of March 31st 2015.

# Azure Script

You can find custom-api and data scripts to send push notifications with javascript in azure-scripts/ folder.

-- Note if creating a request from Postman||Fiddler don't forget to add auth header: `X-ZUMO-APPLICATION`

#Targeted push notifications

You can use tags. More on the subject:
- http://blogs.msdn.com/b/africaapps/archive/2013/10/22/windows-azure-notification-hubs-tags-and-creating-a-breaking-news-app.aspx
