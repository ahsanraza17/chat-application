import { ChatEngine } from "react-chat-engine";
import ChatFeed from "./components/ChatFeed"

const App = () => {
    return (
        <ChatEngine
        height="100vh"
        projectID="741b85f7-6bae-4795-bd89-06dd78ef0db8"
        userName="Aadi Khan"
        userSecret="abkingkong"
        renderChatFeed={(chatAppProps) => <ChatFeed {...chatAppProps} />}
        />
    )
}

export default App;