({
	openAccount : function(component, event, helper) {
        console.log("fire");
        var evt = $A.get("e.force:navigateToURL");
        evt.setParams({
            "url" : "/0012w000004ZsOcAAK" 
        });
        evt.fire();
	},
    openOppty : function(component, event, helper) {
		var evt = $A.get("e.force:navigateToURL");
        evt.setParams({
            "url" : "/006/o" 
        });
        evt.fire();
	},
    showToast : function(component, event, helper) {
        setTimeout(function(){
            var showToast = $A.get("e.force:showToast");
            showToast.setParams({
                "type": "Error",
                "title": "Error!",
                "message": "There is an error."
            });
            showToast.fire();
            setTimeout(function(){location.reload();},5000);
        },5000);
	},
    changeVal : function(component, event, helper) {
        console.log(component.get("v.inpval"));
    },
    buttonAction : function(component, event, helper) {
        console.log("Button clicked is --"+event.getSource().getLocalId());
        console.log("Button clicked is --"+event.getSource().get("v.label"));
    }
})