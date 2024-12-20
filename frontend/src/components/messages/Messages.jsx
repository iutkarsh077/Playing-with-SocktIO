import Message from "./Message";
import useGetMessages from "../../hooks/useGetMessages";
import { LoaderCircle } from "lucide-react"
import useListenMessages from "../../hooks/useListenMessage";
import { useEffect, useRef } from "react";
const Messages = () => {
	const { messages, loading } = useGetMessages();
	useListenMessages();

	const lastMessageRef = useRef();

	useEffect(() => {
		setTimeout(() => {
			lastMessageRef.current?.scrollIntoView({ behavior: "smooth" });
		}, 100);
	}, [messages]);

	if(loading){
		return (
			<div className="w-full h-full flex justify-center items-center">
				<LoaderCircle className="animate-spin text-black"/>
			</div>
		)
	}
	return (
		<div className='px-4 flex-1 overflow-auto'>
			{!loading &&
				messages.length > 0 &&
				messages.map((message) => (
					<div key={message._id}  ref={lastMessageRef}>
						<Message message={message} />
					</div>
				))}
			{!loading && messages.length === 0 && (
				<p className='text-center'>Send a message to start the conversation</p>
			)}
		</div>
	);
};
export default Messages;