import classNames from "#~src/style.css"

type Props = {
	myLabel: string
	onClick: () => void
}

export function MyButton(props: Props) {
	const className = classNames["myButton"]

	return <button className={className} onClick={props.onClick}>
		{props.myLabel}
	</button>
}
