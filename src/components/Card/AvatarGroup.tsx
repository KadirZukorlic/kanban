import './styles.css'

export const AvatarGroup = ({
	avatarGroup
}: {
	avatarGroup: Array<string>
}): JSX.Element => {
	return (
		<div className="avatarGroup">
			{avatarGroup.map((image) => (
				<img src={image} alt="user-image" className="avatarGroup-item" />
			))}
		</div>
	)
}
