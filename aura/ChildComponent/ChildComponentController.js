({
	handleChildClick : function(component, event, helper) {
		var evt = component.getEvent("testEvent");
        evt.setParams({
            "myAttr1" : "Hello From Event"
        });
        evt.fire();
        console.log("fired!!");
	}
})