({
	handleClick : function(component, event, helper) {
		console.log('recordId --'+component.get("v.recordId"));
		var evt = component.getEvent("testEvent");
        evt.setParams({
            "recordId" : component.get("v.recordId")
        });
        evt.fire();
        console.log("fired!!");
	}
})