@RestResource(urlMapping='/CustomAccount/*')
global with sharing class RestResourceCls {
    @HttpDelete
    global static void doDelete() {
        RestRequest req = RestContext.request;
        RestResponse res = RestContext.response;
        String accountId = req.params.get('accountId');
        Account account = [SELECT Id FROM Account WHERE Id = :accountId];
        delete account;
    }
  
    @HttpGet
    global static Account doGet() {
        RestRequest req = RestContext.request;
        RestResponse res = RestContext.response;
        String accountId = req.params.get('accountId');
        system.debug('accountId --'+accountId);
        Account result = [SELECT Id, Name, Phone, Website FROM Account WHERE Id = :accountId];
        result.Name = 'XYZ';
        return result;
    }
  
  @HttpPost
    global static String doPost(String name,
        String phone) {
        Account account = new Account();
        account.Name = name;
        account.phone = phone;
        insert account;
        return account.Id;
    }
}