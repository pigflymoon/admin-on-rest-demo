import React from 'react';
import {Card, CardTitle} from 'material-ui/Card';
import {translate} from 'admin-on-rest';
import Upload from './Upload';

const style = {flex: 1};

export default translate(({orders = [], customers = {}, translate}) => (
    <Card style={style}>
        <CardTitle title={translate('Upload')}/>
        <Upload/>
    </Card>
));
