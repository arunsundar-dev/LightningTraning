({
	getOpportunity : function(component,event) {
		var apexaction = component.get("c.getOpportunity");
        apexaction.setCallback(this,function(response){
            if(response){
                if(response.getState() == "SUCCESS"){
                    console.log('response --'+JSON.stringify(response.getReturnValue()));
                    console.log(response.getReturnValue());
                    component.set("v.oppty",response.getReturnValue());
                } else {
                    
                }
        	}
        });
        $A.enqueueAction(apexaction);
	},
    getOppotyParams : function(component,event,recordId){
        console.log("recordId --"+recordId);
        var apexaction = component.get("c.getOpp");
        apexaction.setParams({
            "recordId" : recordId
        });
        apexaction.setCallback(this,function(response){
            if(response){
                if(response.getState() == "SUCCESS"){
                    console.log('response --'+JSON.stringify(response.getReturnValue()));
                    console.log(response.getReturnValue().Name);
                    component.set("v.oppty",response.getReturnValue());
                } else {
                    
                }
        	}
        });
        $A.enqueueAction(apexaction);
    },
    updateOpporty : function(component,event,record){
        console.log(record.Name);
        var apexaction = component.get("c.updateOpportunity");
        apexaction.setParams({
            "record" : record
        });
        apexaction.setCallback(this,function(response){
            if(response){
                if(response.getState() == "SUCCESS"){
                    console.log('response --'+JSON.stringify(response.getReturnValue()));
                    console.log(response.getReturnValue().Name);
                    component.set("v.oppty",response.getReturnValue());
                    $A.get('e.force:refreshView').fire();
                } else {
                    
                }
        	}
        });
        $A.enqueueAction(apexaction);
    },
    getDataTableVal : function(component,event){
        console.log("here");
        var opparray = {};
        var apexaction = component.get("c.getListopportunity");
        apexaction.setCallback(this,function(response){
            console.log("response --"+response);
            if(response){
                console.log('response --'+JSON.stringify(response.getReturnValue()));
                if(response.getState() == "SUCCESS"){
                    component.set("v.tableData",response.getReturnValue());
                    /*for(var i in response.getReturnValue()){
                        if(i.StageName != "Closed Lost"){
                            opparray.push(i);
                        } 
                    }*/
                } 
                //component.set("v.tableData",opparray);
        	}
        });
        $A.enqueueAction(apexaction);
    }
})