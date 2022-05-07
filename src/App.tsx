import { useRef, useState } from "react";
import Message from "./components/Message";
import { MessageInt } from './model';

function App() {
  const inputMessage = useRef<HTMLInputElement>(null);

  const [messageData, setMessageData] = useState<MessageInt[]>([]);

  const handleSubmit = (e:any) => {
    e.preventDefault();

    if(inputMessage) {
      const mess:MessageInt = {
        id: Math.round(Math.random() * Date.now()),
        message: inputMessage?.current?.value,
        date: Date.now()
      }
      setMessageData((prevData) => [...prevData, mess]);
    }

    (document.getElementById('inputMessage') as HTMLInputElement).value = "";
  }
  return (
    <div>
      <h2>Hello React</h2>
      <form onSubmit={(e) => handleSubmit(e)}>
        <input type="text" id="inputMessage" placeholder='Entrer un message' ref={inputMessage}/>
        <input type="submit" value="Envoyer" />
        <h2>Liste des messages</h2>
        <div>
          {messageData?.map((message:MessageInt) => (
              <Message message={message} messageData={messageData} setMessageData={setMessageData} key={message.id}/>
            ))
          }
        </div>
      </form>
    </div>
  );
}

export default App;
