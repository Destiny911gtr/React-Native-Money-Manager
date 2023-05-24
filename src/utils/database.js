import { createRealmContext } from '@realm/react';
import Realm from 'realm';

export class Expenditure extends Realm.Object {
    static schema = {
        name: 'Expenditure',
        properties: {
            _id: 'int',
            amount: 'double',
            desc: 'string',
            date: 'date'
        },
        primaryKey: '_id',
    };
}

export const realmConfig = createRealmContext({
    schema: [Expenditure],
});

export class AppSettings extends Realm.Object {
    static schema = {
        name: 'AppSettings',
        properties: {
            _id: 'int',
            limit: 'double',
            balance: 'double',
            spent: 'double'
        },
        primaryKey: '_id',
    };
}

export const appConfig = createRealmContext({
    schema: [AppSettings],
});