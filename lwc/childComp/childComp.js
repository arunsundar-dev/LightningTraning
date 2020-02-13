import { LightningElement,track,api } from 'lwc';

export default class ChildComp extends LightningElement {

    @track myMessage;
    @track myText;

    @api
    changeMessage(myString){
        console.log('inside child'+myString);
        this.myMessage = myString;
    }

    handleClick(){
        var value = this.template.querySelector('lightning-input').value;
        console.log('entered value --'+value);
        const myEvent = new CustomEvent('parameterpassevent',{detail:value});
        this.dispatchEvent(myEvent);
    }
}