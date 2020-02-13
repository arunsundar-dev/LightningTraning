import { LightningElement,track,wire } from 'lwc';
import { registerListener, unregisterAllListeners} from 'c/pubsub';
import { CurrentPageReference } from 'lightning/navigation';

export default class SecondComponent extends LightningElement {
    @track myMessage;
    @wire(CurrentPageReference) pageRef;

    connectedCallback(){
        registerListener('messageFroComp',this.myHandler,this);
    }

    myHandler(abc){
        console.log(abc);
        this.myMessage = abc;
    }   

    disconnectedCallback(){
        unregisterAllListeners(this);
    }

}