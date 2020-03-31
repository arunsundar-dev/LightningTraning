public class wrapperConstructClass {
	
    @AuraEnabled
    public static wrapperNew getWrapper(){
        list<Account> lstAccount = [SELECT Id,name,Type,Phone From Account limit 20];
        list<Contact> lstContact = [SELECT Id,name FROM Contact limit 2];
        
        wrapperNew wrap = new wrapperNew();
        wrap.acctList = new list<Account>(lstAccount);
        wrap.conList = new list<Contact>(lstContact);
        
        return wrap;
    }
    
    public class wrapperNew{
        @AuraEnabled
        public list<Account> acctList;
        @AuraEnabled
        public list<Contact> conList;
    }
}