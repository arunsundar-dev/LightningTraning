public class RestRequests {
	
    private static String baseUrl = URL.getSalesforceBaseUrl().toExternalForm() + '/services/data/v20.0/sobjects/Account';
    //for status codes
    //https://developer.salesforce.com/docs/atlas.en-us.apexcode.meta/apexcode/apex_rest_methods.htm
	
    public static void postRequest(){
        String json = '{ "Name" : "Training 123" }'; 
        Httprequest req = new HttpRequest(); 
        req.setEndpoint(baseUrl); 
        req.setMethod('POST'); 
        req.setHeader('Content-Type', 'application/json'); 
        req.setHeader('Authorization', 'OAuth ' + UserInfo.getSessionId()); 
        req.setBody(json); 
        Http httpReq = new Http(); 
        HttpResponse res = httpReq.send(req); 
        System.debug(res.getBody()); 	
    }
        
    public static void getResponse(){       
        Httprequest req = new HttpRequest(); 
        req.setEndpoint(baseUrl+'/0012v00002z8o4zAAA?fields=Name,Industry,field2'); 
        req.setMethod('GET'); 
        req.setHeader('Content-Type', 'application/json'); 
        req.setHeader('Authorization', 'OAuth ' + UserInfo.getSessionId()); 
		Http httpReq = new Http(); 
        HttpResponse res = httpReq.send(req); 
        System.debug(res.getStatus());
                
        Json2Apex acct = Json2Apex.parse(res.getBody());
        system.debug('acct --'+acct.Id);
        system.debug('acct --'+acct.Industry);
    }
    
    public static HttpResponse callPostResource(){
		String json = '{ "name" : "TestA 2233","phone" : "1234"}'; 
        Httprequest req = new HttpRequest(); 
        req.setEndpoint(URL.getSalesforceBaseUrl().toExternalForm()+'/services/apexrest/CustomAccount'); 
        system.debug(req.getEndpoint());
        req.setMethod('POST'); 
        req.setHeader('Content-Type', 'application/json'); 
        req.setHeader('Authorization', 'OAuth ' + UserInfo.getSessionId()); 
        req.setBody(json);
        Http httpReq = new Http(); 
        HttpResponse res = httpReq.send(req); 
        System.debug(res.getBody()); 	
		return res;         
    }
    
    public static HttpResponse callGetResource(){
        Httprequest req = new HttpRequest(); 
        req.setEndpoint(URL.getSalesforceBaseUrl().toExternalForm()+'/services/apexrest/CustomAccount?accountId=0012v00002z8bKDAAY'); 
        system.debug(req.getEndpoint());
        req.setMethod('GET'); 
        req.setHeader('Content-Type', 'application/json'); 
        req.setHeader('Authorization', 'OAuth ' + UserInfo.getSessionId()); 
        Http httpReq = new Http(); 
        HttpResponse res = httpReq.send(req); 
        System.debug(res.getBody()); 
        return res;
    } 
    
}