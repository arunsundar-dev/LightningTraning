({
	search : function(component, event, helper) {
		console.log('here');
        var apexaction = component.get("c.getOpptyFromSearch");
        apexaction.setParams({
            "name" : component.get("v.inputval")
        });
        apexaction.setCallback(this,function(response){
            if(response){
                if(response.getState() == "SUCCESS"){
                    console.log('response --'+JSON.stringify(response.getReturnValue()));
                    console.log(response.getReturnValue());
                    component.set("v.data",response.getReturnValue());
                } 
        	}
        });
        $A.enqueueAction(apexaction);
	},
    onLoad : function(component, event, helper){
        component.set('v.columns', [
            {label: 'Opportunity name', fieldName: 'Name', type: 'text'},
            {label: 'Type', fieldName: 'Type', type: 'text'},
            {label: 'Close date', fieldName: 'CloseDate', type: 'date'},
            {label: 'Stage', fieldName: 'StageName', type: 'text'}
        ]);
        var apexaction = component.get("c.getListopportunity");
        apexaction.setCallback(this,function(response){
            if(response){
                if(response.getState() == "SUCCESS"){
                    console.log('response --'+JSON.stringify(response.getReturnValue()));
                    console.log(response.getReturnValue());
                    component.set("v.data",response.getReturnValue());
                } else {
                    
                }
        	}
        });
        $A.enqueueAction(apexaction);
    }
})