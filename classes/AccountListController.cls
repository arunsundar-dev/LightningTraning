public class AccountListController {
    
    @AuraEnabled
    public static List<Account> returnAccountList(){
        List<Account> acctList = [Select Id,Name,Type,Phone,AccountNumber From Account limit 10];
        return acctList;
    }

}