public with sharing class HelloWorldController{

    @AuraEnabled(cacheable=true)
    public static List<Account> getAccountList(){
        return [Select Id,Name,Type,Phone,AccountNumber From Account limit 10];
    }
}