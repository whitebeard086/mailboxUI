import { Button, buttonVariants } from '@/components/ui/button';
import { Link, useNavigate } from 'react-router-dom';

const Error = () => {
	const navigate = useNavigate();

	const handleClick = () => {
		console.log('clicked');
		navigate(-1);
	};

	return (
		<section className="container max-w-4xl text-center grid min-h-screen place-items-center">
			<div className="w-full rounded-lg border bg-card text-card-foreground shadow-sm py-14 px-5">
				<h1 className="text-primary">Oops!!!</h1>
				<p>Sorry, an unexpected error has occurred.</p>
				<div className="flex gap-4 items-center justify-center mt-5">
					<Button variant='secondary' onClick={handleClick}>Go Back</Button>
					<Link to="/" className={buttonVariants({ variant: 'primary' })}>
						Home
					</Link>
				</div>
			</div>
		</section>
	);
}
export default Error