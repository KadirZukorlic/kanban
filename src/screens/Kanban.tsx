import React from 'react'
import { DUMMY_DATA } from '../data'
import Column from '../components/Column'

const Kanban = () => {
	return (
		<div style={{ display: 'flex', gap: '10px' }}>
			<Column
				data={DUMMY_DATA.toDo}
				label="To Do"
				tasksNumber={DUMMY_DATA.toDo.length}
			/>
			<Column
				data={DUMMY_DATA.inProgress}
				label="In Progress"
				tasksNumber={DUMMY_DATA.toDo.length}
			/>
			<Column
				data={DUMMY_DATA.readyForReview}
				label="Ready for review"
				tasksNumber={DUMMY_DATA.toDo.length}
			/>
			<Column
				data={DUMMY_DATA.testing}
				label="Testing"
				tasksNumber={DUMMY_DATA.testing.length}
			/>
			<Column
				data={DUMMY_DATA.testing}
				label="Completed Tasks"
				tasksNumber={DUMMY_DATA.completed.length}
			/>
		</div>
	)
}

export default Kanban
