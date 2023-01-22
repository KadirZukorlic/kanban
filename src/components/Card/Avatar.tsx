import './styles.css'

export const Avatar = ({ avatar }: { avatar: string }): JSX.Element => {
	return (
		<>
			{avatar ? <img className="avatar" src={avatar} alt="user-image" /> : null}
		</>
	)
}
