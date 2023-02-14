using { lowcodesample as my } from '../db/schema';

using lowcodesample from '../db/schema';

@path : 'service/lowcodesample'
service lowcodesampleService
{
    @odata.draft.enabled
    entity Capex as
        projection on my.Capex;

    entity Contractors as
        projection on my.Contractors;
}

annotate lowcodesampleService with @requires :
[
    'authenticated-user'
];
