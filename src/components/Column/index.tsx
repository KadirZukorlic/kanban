import { Card } from '../Card'
import { OptionsIcon } from '../Icons'
import { DUMMY_DATA } from '../../data'
import './styles.css'

type ColumnProps = {
	data: any
	label: string
	tasksNumber: number
}

const Column = ({ data, label, tasksNumber }: ColumnProps) => {

	console.log(data)

	return (
		<div className="column">
			<div className="columnHeader">
				<div style={{ display: 'flex', gap: '10px', alignItems: 'center' }}>
					<h3 className="label">{label}</h3>
					<p className="labelNumber">({tasksNumber})</p>
				</div>
				<OptionsIcon />
			</div>
			{data.map(
				({ title, startDate, dueDate, messages, subtasks, avatar, avatarGroup, completed }: any) => (
					<Card
						completed={completed}
						title={title}
						startDate={startDate}
						dueDate={dueDate}
						messages={messages}
						subtasks={subtasks}
						avatar={avatar}
						avatarGroup={avatarGroup}
					/>
				)
			)}
			<button className="btn">+ Add a Task</button>
		</div>
	)
}

export default Column
