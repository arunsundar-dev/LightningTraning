import { LightningElement,track,wire } from 'lwc';
import { registerListener, unregisterAllListeners} from 'c/pubsub';
import { CurrentPageReference } from 'lightning/navigation';

export default class SecondComponent extends LightningElement {
    @track myMessage;
    @wire(CurrentPageReference) pageRef; //have to specify the page reference here so that only the components inside the page are connected.

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
