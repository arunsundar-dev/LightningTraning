import { LightningElement,api,track,wire } from 'lwc';
//getting current user id
import uid from '@salesforce/user/Id';

//getting custom label
import mylabel from '@salesforce/label/c.Label_test_for_lightning';

//getting from static resource
import myimg from '@salesforce/resourceUrl/TestImage';

//importing the gettoast
import {ShowToastEvent} from 'lightning/platformShowToastEvent';

export default class MyTestComponent extends LightningElement {
    @track myAttribute = "this is new";
    @track inpval;
    @track inpdate;
    @track inptoggle = false;
    @track userid = uid;
    @track lable = mylabel;
    @track myimage = myimg;
    @track yurl; 

    calljs(event){
        console.log('value --'+event.target.value);
        if(event.target.type === "toggle"){
            this.inptoggle = event.target.checked;
            this.inptoggle = true;
        } else {
            this.inptoggle = false;
        }
        /*else if(event.target.type === "date")
            this.inpdate = event.target.value;
        else
            this.inpval =event.target.value;*/
    }

    callYoutubeId(event){
        this.yurl = 'https://www.youtube.com/embed/'+event.target.value;
    }

    showToast(event){
        //invoking an event
        const evt = new ShowToastEvent(
            {
                "title" : "Success",
                "message" : "Clicked Successfully"
            }
        );
        this.dispatchEvent(evt);
    }
}