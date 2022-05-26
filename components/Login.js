import Image from 'next/image';
import {useSession, signIn, signOut} from 'next-auth/react';
function Login() {
	const {data: session} = useSession();

	const handleSignin = e => {
		e.preventDefault();
		signIn();
	};
	const handleSignout = e => {
		e.preventDefault();
		signOut();
	};

	return (
		<div className='grid place-items-center'>
			<Image
				src='/CForCat.svg'
				alt=''
				height={400}
				width={400}
				objectFit='contain'
			/>
			<h1
				onClick={signIn}
				className='p-5 bg-blue-500 rounded-full text-white text-center cursor-pointer'>
				{session && (
					<a href='#' onClick={handleSignout} className='btn-signin'>
						Sign out
					</a>
				)}
				{!session && (
					<a href='#' onClick={handleSignin} className='btn-signin'>
						Sign in
					</a>
				)}
			</h1>
		</div>
	);
}

export default Login;
