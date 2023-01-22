import { MessagesIcon, SubtasksIcon } from '../Icons'
import { Avatar } from './Avatar'
import './styles.css'

type CardProps = {
	title: string
	startDate?: string
	dueDate?: string
	messages?: number
	subtasks?: number
}

export const Card = ({ title, startDate, dueDate, messages, subtasks }: CardProps) => {
	return (
		<div className="card">
			<p className="cardTitle">
				{title}
			</p>
			<div className="signifierGroup">
				<div className="cardLabel" />
				<div className="dot" />
				<div className="messages-subtasks">
					<MessagesIcon /> {messages}
				</div>
				<div className="dot" />
				<div className="messages-subtasks">
					<SubtasksIcon /> {subtasks}
				</div>
			</div>
			<div
				style={{
					display: 'flex',
					alignItems: 'center',
					justifyContent: 'space-between'
				}}
			>
				<p className="startAndDueDate">{startDate} - {dueDate}</p>
				<Avatar />
			</div>
		</div>
	)
}
