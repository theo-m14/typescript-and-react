import { MessageInt } from '../model';

type Props = {
    message: MessageInt;
    messageData:MessageInt[];
    setMessageData:React.Dispatch<React.SetStateAction<MessageInt[]>>;
}

const Message = ({message, messageData, setMessageData}: Props) => {


    const dateFormater = (date:number) : string  => {
        return new Date(date).toLocaleDateString('fr-FR', {
            day : "numeric",
            month : 'long'
        });
    }

    const handleDelete = () => {
        setMessageData(messageData.filter((element) => element.id !== message.id));
    }

    return (
        <div className="message-container">
            <p>{message.message}</p>
            <h5>{dateFormater(message.date)}</h5>
            <span id='delete' onClick={() => {handleDelete()}}>&#10008;</span>
        </div>
    );
};

export default Message;