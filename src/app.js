import { ChatEngine } from 'react-chat-engine';
import './app.css';

import { ChatFeed } from './components/ChatFeed';


const App = () => {
    return (
        <ChatEngine
            height="100vh"
            projectID="34824ed7-96c6-4818-9664-ae75824a2752"
            userName="jsmastery"
            userSecret="123123"
            renderChatFeed={(chatAppProps) => <ChatFeed {...chatAppProps}/>}
        />
    )
}


export default App
