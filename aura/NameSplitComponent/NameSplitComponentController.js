({
	myButtonClick : function(component, event, helper) {
        var targetButton = component.find("changeButton");
        $A.util.addClass(targetButton,"buttonClass");
		var fullName = component.get("v.inpVal");
        console.log("This is my fullname --"+fullName);
        if(fullName.length>10){
            component.set("v.firstName","");
            component.set("v.secondName","");
            component.set("v.errormessage","More than 10 chars found");
        }else {
            component.set("v.errormessage","");
            if(fullName.indexOf(' ') >= 0){
                var name = fullName.split(" ");
                component.set("v.firstName",name[0]);
                component.set("v.secondName",name[1]);
            } else {
                component.set("v.firstName",fullName);
                component.set("v.secondName","");
            }
        }
	},
    createGmail : function(component, event, helper) {
        var fullName = component.get("v.inpVal");
        var firstname = component.get("v.firstName");
        var secondname = component.get("v.secondName");
        var first = firstname.substring(0, 4);
        var last = secondname.substring(secondname.length-4,secondname.length);
        component.set("v.gmail",first+last+"@gmail.com");
    },
    init : function(component, event, helper){
        console.log($A.get("$Label.c.Label_test_for_lightning"));
        console.log($A.get("$SObjectType.CurrentUser.Id"));
    }
})