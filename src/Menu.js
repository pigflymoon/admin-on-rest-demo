import React from 'react';
import { connect } from 'react-redux';
import compose from 'recompose/compose';
// import SettingsIcon from 'material-ui/svg-icons/action/settings';
// import LabelIcon from 'material-ui/svg-icons/action/label';
import { translate, DashboardMenuItem,} from 'admin-on-rest';//MenuItemLink

// import { VisitorIcon } from './visitors';
// import { CommandIcon } from './commands';
// import { ProductIcon } from './products';
// import { CategoryIcon } from './categories';
// import { ReviewIcon } from './reviews';

// const items = [
//     { name: 'customers', icon: <VisitorIcon /> },
//     { name: 'segments', icon: <LabelIcon /> },
//     { name: 'commands', icon: <CommandIcon /> },
//     { name: 'products', icon: <ProductIcon /> },
//     { name: 'categories', icon: <CategoryIcon /> },
//     { name: 'reviews', icon: <ReviewIcon /> },
// ];

const styles = {
    main: {
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'flex-start',
        height: '100%',
    },
};

const Menu = ({ onMenuTap, translate, logout }) => (
    <div style={styles.main}>
        <DashboardMenuItem onClick={onMenuTap} />

        {logout}
    </div>
);

const enhance = compose(
    connect(state => ({
        theme: state.theme,
        locale: state.locale,
    })),
    translate,
);

export default enhance(Menu);
