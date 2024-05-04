import { Outlet } from 'react-router-dom'

const InboxRoot = () => {
    return (
        <section className="h-full">
			<Outlet />
		</section>
    )
}
export default InboxRoot