import React from 'react'
import { DUMMY_DATA } from '../data'
import Column from '../components/Column'

const Kanban = () => {
	return (
		<div
			style={{ display: 'flex', justifyContent: 'center', flexWrap: 'wrap' }}
		>
			<Column
				data={DUMMY_DATA.toDo}
				label="To Do"
				tasksNumber={DUMMY_DATA.toDo.length}
			/>
			<Column
				data={DUMMY_DATA.inProgress}
				label="In Progress"
				tasksNumber={DUMMY_DATA.inProgress.length}
			/>
			<Column
				data={DUMMY_DATA.readyForReview}
				label="Ready for review"
				tasksNumber={DUMMY_DATA.readyForReview.length}
			/>
			<Column
				data={DUMMY_DATA.testing}
				label="Testing"
				tasksNumber={DUMMY_DATA.testing.length}
			/>
			<Column
				data={DUMMY_DATA.completed}
				label="Completed Tasks"
				tasksNumber={DUMMY_DATA.completed.length}
			/>
			<div
				style={{
					width: '100%',
					height: '12px',
					backgroundColor: '#8E8E8E',
					borderRadius: '8px',
					marginTop: '24px'
				}}
			/>
		</div>
	)
}

export default Kanban
