import { LightningElement,track,wire } from 'lwc';

import getWrapperData from '@salesforce/apex/myController.getOppAndProdValues';

const columns = [
    { label: 'Opp Name', fieldName: 'oppName', type: 'text' },
    { label: 'Opp Prod name', fieldName: 'oppProdName' },
    { label: 'Prod Name', fieldName: 'prodName' },
    {label: 'Prod URL',fieldName: 'ProdUrl',type:'url'}
];

export default class DisplayWrapperData extends LightningElement {
    @track columns = columns;
    @track tabledata = [];

    //method to get the wrapper data
    getWrapperDataFromApex(){
        getWrapperData().then(
            result => { 
                console.log("result --"+JSON.stringify(result));
                for(var i in result){
                    result[i]['ProdUrl'] = '/'+result[i].oppName;
                }
                this.tabledata = result;
            }
        ).catch(
            error => {
                console.log("error --"+error);
            }
        );
    }
}