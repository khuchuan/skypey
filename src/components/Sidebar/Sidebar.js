import React from 'react';
import './Sidebar.css';
import User from '../../containers/User/User';

const Sidebar = ({contacts} ) => {
    // console.log('Sidebar.contacts: ' + JSON.stringify(contacts));
    console.log('da vao Sidebar');

    return (
        <aside className="Sidebar">
            {contacts.map( contact => <User user={contact } key= {contact.user_id} /> ) }
            {/* {contacts.map( contact => <User user={contact } key= {Math.round(new Date().getTime()/1000)} /> ) } */}
        </aside>
    )
}

export default Sidebar;