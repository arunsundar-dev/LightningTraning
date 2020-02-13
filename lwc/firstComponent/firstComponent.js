import { LightningElement,track,wire } from 'lwc';
import {  fireEvent } from 'c/pubsub';
import { CurrentPageReference } from 'lightning/navigation';


export default class FirstComponent extends LightningElement {
    @track myVal;
    @wire(CurrentPageReference) pageRef;

    handleClick(){
        var inputVal = this.template.querySelector('lightning-input');
        console.log('myVal --'+inputVal.value);
        console.log(this.pageRef);
        fireEvent(this.pageRef,'messageFroComp',inputVal.value);
    }
}