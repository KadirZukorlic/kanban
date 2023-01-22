import { MessagesIcon, SubtasksIcon } from '../Icons'
import { Avatar } from './Avatar'
import { AvatarGroup } from './AvatarGroup'
import Label from './Label'
import './styles.css'

type CardProps = {
	title: string
	startDate?: string
	dueDate?: string
	messages?: number
	subtasks?: number
	avatar: string
	avatarGroup?: Array<string>
	completed?: boolean
}

export const Card = ({
	title,
	startDate,
	dueDate,
	messages,
	subtasks,
	avatar,
	avatarGroup,
	completed
}: CardProps): JSX.Element => {
	return (
		<div
			className="card"
			style={{ backgroundColor: completed ? '#f3fffc' : '' }}
		>
			<p className="cardTitle">{title}</p>
			<div className="signifierGroup">
				<Label />
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
				<p className="startAndDueDate">
					{startDate} {dueDate ? '-' : ' '} {dueDate}
				</p>
				<Avatar avatar={avatar} />
				{avatarGroup && <AvatarGroup avatarGroup={avatarGroup} />}
			</div>
		</div>
	)
}
