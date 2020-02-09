public class myController {
	
    @AuraEnabled
    public static Opportunity getOpportunity(){
        return [SELECT Id,name,Type,StageName,CloseDate From Opportunity Limit 1];
    }
    
    @AuraEnabled
    public static Opportunity getOpp(String recordId){
         return [SELECT Id,name,Type,StageName,CloseDate From Opportunity Where Id=:recordId];
    }
    
    @AuraEnabled
    public static Opportunity updateOpportunity(Opportunity record){
        update record;
        return record;
    }
    
    @AuraEnabled
    public static list<Opportunity> getListopportunity(){
        return [SELECT Id,name,Type,StageName,CloseDate From Opportunity Limit 10];
    }
    
    @AuraEnabled
    public static list<Opportunity> getOpptyFromSearch(String name){
        return [SELECT Id,name,Type,StageName,CloseDate From Opportunity Where (Name Like: '%'+name+'%') OR (Type Like: '%'+name+'%') OR (StageName Like: '%'+name+'%') limit 10];
    }

    @AuraEnabled
    public static list<wrapperClass> getOppAndProdValues(){
        list<wrapperClass> wrapperList = new list<wrapperClass>();
        for(OpportunityLineItem lineitem: [SELECT Id,Opportunity.name,Product2.Name From OpportunityLineItem]){
            wrapperClass wrapper = new wrapperClass(lineitem.id,lineitem.Opportunity.name,lineitem.Product2.Name);
            wrapperList.add(wrapper);
        }
        return wrapperList;
    }

    public class wrapperClass{
        @AuraEnabled public String oppName;
        @AuraEnabled public String oppProdName;
        @AuraEnabled public String prodName;

        public wrapperClass(String oppName,String oppProdName,String prodName){
            this.oppName = oppName;
            this.oppProdName = oppProdName;
            this.prodName = prodName;
        }
    }
}