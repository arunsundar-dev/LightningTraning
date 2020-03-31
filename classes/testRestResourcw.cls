@isTest
private class testRestResourcw {

    static testMethod void testPostResource() {
        RestRequest req = new RestRequest(); 
        RestResponse res = new RestResponse();
        
        req.addHeader('httpMethod', 'POST');
        req.requestUri = '/services/apexrest/CustomAccount/';       
        RestContext.response= res;
        Test.startTest();
        String Id = RestResourceCls.doPost('TestA 2233','1234');
        Test.stopTest();
        System.assertNotEquals(Null, Id);
   }
    
    static testMethod void testGetResource(){
        RestRequest req = new RestRequest(); 
        RestResponse res = new RestResponse();
        
        req.addHeader('httpMethod', 'GET');
        Account testAccount =  new Account(name='Test123',Phone='1234');
        insert testAccount;
        req.requestUri = '/services/apexrest/CustomAccount?accountId='+testAccount.Id;
        req.params.put('accountId',testAccount.Id);
        RestContext.request = req;
        RestContext.response= res;
        Test.startTest();
        Account acct= RestResourceCls.doGet();
        system.debug('acct --'+acct);
        Test.stopTest();
    }

}