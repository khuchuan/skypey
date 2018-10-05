import React from 'react';
import "./Main.css";

import Empty from '../Empty/Empty';
import ChatWindow from "../../containers/ChatWindow/ChatWindow";

const Main = ({ user, activeUserId }) => {
    const renderMainContent = () => {
        if (!activeUserId) {
            console.log('main. activeUserId: ' + activeUserId);
            return <Empty user={user} activeUserId={activeUserId} />
        }
        else {
            return <ChatWindow activeUserId={activeUserId} />
        }
    };

    return <main className="Main"> {renderMainContent()} </main>
}

export default Main;