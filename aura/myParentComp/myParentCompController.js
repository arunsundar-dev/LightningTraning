({
	receiveEvent : function(component, event, helper) {
		var evt = event.getParam("recordId");
        component.set("v.recid",evt);
	}
})