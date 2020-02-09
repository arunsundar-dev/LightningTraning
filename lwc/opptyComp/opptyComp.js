import { LightningElement,track,api,wire } from 'lwc';

//importing uid 
import uid from '@salesforce/user/Id';

//import getting record details 
import {getRecord} from 'lightning/uiRecordApi';

//importing the apex class 
import getRandOppty from '@salesforce/apex/myController.getOpportunity';

import getSpecificOppty from '@salesforce/apex/myController.getOpp';
import getOpptyList from '@salesforce/apex/myController.getListopportunity';
import getOpptyFromSearch from '@salesforce/apex/myController.getOpptyFromSearch';

const columns = [
    { label: 'Opp Name', fieldName: 'Name' },
    { label: 'Opp Type', fieldName: 'Type' },
    { label: 'Stage Name', fieldName: 'StageName' },
    { label: 'Close Date', fieldName: 'CloseDate' },
];

export default class OpptyComp extends LightningElement {
    @api recordId;
    @wire(getRecord,{
        recordId : '$recordId',
        fields : ['Opportunity.Name','Opportunity.Type']
    }) oppRecord;
    @track tabledata = [];
    @track columns = columns;

    displayRecord(event){
        //console.log(this.oppRecord.data.fields.Type.value);
    }

    //method to get a random oppty 
    callApexToLoadData(){
        getRandOppty().then(
            result => { 
                console.log("result --"+JSON.stringify(result))
            }
        ).catch(
            error => {
                console.log("error --"+error)
            }
        );
    }

    //method to pass a param and get an oppty 
    getOpportunityFromInput(){
        getSpecificOppty({
            "recordId" : this.recordId
        }).then(
            result => { 
                console.log("result --"+JSON.stringify(result))
            }
        ).catch(
            error => {
                console.log("error --"+error)
            }
        );
    }

    //method to list all oppty 
    getOpportunityList(){
        getOpptyList().then(
            result => { 
                console.log("result --"+JSON.stringify(result))
                this.tabledata = result;
            }
        ).catch(
            error => {
                console.log("error --"+error)
            }
        );
    }

    //search oppty 
    searchOppty(event){
        var val = event.target.value;
        if(event.target.value){
            getOpptyFromSearch(
                {"name" : event.target.value}
            ).then(
                result => {
                    this.tabledata = result;
                }
            ).catch(
                error => {

                }
            );
        } else {
            this.getOpportunityList();
        }
    }
   
}