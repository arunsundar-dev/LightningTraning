({
	handleSubmitForm : function(component, event, helper) {
		//alert("Submitted Successfully.");
        //console.log("Submitted Successfully from onSubmitForm.");
	},
    onSuccess : function(component, event, helper){
    	//alert("Submitted Successfully from onSuccess.");
        //console.log("Submitted Successfully from onSuccess.");
	},
    onSuccessForm : function(component, event, helper){
    	//alert("Submitted Successfully from onSuccessForm.");
        //console.log("Submitted Successfully from onSuccessForm.");
	},
    showData : function(component, event, helper){
        console.log(component.get("v.oppty"));
        console.log(component.get("v.oppty.StageName"));
        console.log(component.get("v.oppty.Type"));
        console.log(component.get("v.oppty.CloseDate"));
        helper.helperMethod(component, event);
    }
})