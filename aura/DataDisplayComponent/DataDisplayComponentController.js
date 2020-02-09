({
	getData : function(component, event, helper) {
        component.set('v.columns', [
            {label: 'Opportunity name', fieldName: 'Name', type: 'text'},
            {label: 'Type', fieldName: 'Type', type: 'text'},
            {label: 'Close date', fieldName: 'CloseDate', type: 'date'},
            {label: 'Stage', fieldName: 'StageName', type: 'text'}
        ]);
        helper.getDataTableVal(component,event);
        helper.getOpportunity(component,event);
        
	},
    passParams : function(component, event, helper) {
        var recordId = component.get("v.recordId");
        helper.getOppotyParams(component,event,recordId);
    },
    updateOppty : function(component, event, helper) {
        var record = component.get("v.oppty");
        helper.updateOpporty(component,event,record);
    }
})