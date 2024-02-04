const {GristDocAPI} = require('../lib/index');



const DOC_URL = "https://docs.getgrist.com/oD4ZzL6igKQ2/TestSheet";

async function main() {
    let r;
    const api = new GristDocAPI(DOC_URL, { apiKey: '9d2f54489cf6cf9d93cb7d255fad0da9e9422f26' });

    // // Fetch all rows.
    // const data = await api.fetchTable('Food');
    // console.log(data);

    // Sync data by a key column.
    // await api.syncTable('Food', [
    //     { Name: 'eggs', AmountToBuy: 33 },
    //     { Name: 'beets', AmountToBuy: 99 },
    // ], ['Name']);
    // await api.addColumns('Food', [{id: 'address', fields: {type: 'Text', label: 'Addressz'}}]);
    await api.addOrUpdateColumns('Food', [
        {id: 'hobbies', fields: {type: 'Text', label: 'Hobbies22'}}]
        );

    r = await api.listColumns('Food');
    console.log(JSON.stringify(r));
}

main();