import { LightningElement,track,wire,api } from 'lwc';

import getOpportunity from '@salesforce/apex/myController.getOpptyFromSearch';

const columns = [
    { label: 'Opp Name', fieldName: 'Name' },
    { label: 'Opp Type', fieldName: 'Type' },
    { label: 'Stage Name', fieldName: 'StageName' },
    { label: 'Close Date', fieldName: 'CloseDate' },
];

export default class ParentComp extends LightningElement {
    @track inpval;
    @track columns = columns;
    @api tabledata;

    showToast(){
        console.log('this --'+this.template.querySelector('lightning-input').value);
        this.template.querySelector('c-child-comp').changeMessage(this.template.querySelector('lightning-input').value);
    }

    eventHandlerFn(event){
        console.log(event.detail);
        if(event.detail){
            getOpportunity({
                "name" : event.detail
            }).then(
                result => {
                    console.log('result --'+result);
                    this.tabledata=result;
                }
            ).catch(
                error => {

                }
            );
        }
    }
}