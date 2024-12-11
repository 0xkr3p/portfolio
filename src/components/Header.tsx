import Link from 'next/link'

export default function Header() {
	return (
		<header className='max-w-4xl mx-auto flex justify-between items-center p-4 w-full'>
			<div className='flex items-center gap-2'>
				<div className='flex items-center gap-2'>
					<span className='text-4xl font-bold'>
						krep<span className='text-lime-400'>.</span>
					</span>
				</div>
				<div className='flex items-center gap-2 ml-12'>
					<nav>
						<ul className='flex items-center gap-6'>
							<li>
								<Link
									className='hover:text-lime-400 transition-colors duration-300 ease-in-out'
									href='/'
								>
									Home
								</Link>
							</li>
							<li>
								<Link
									className='hover:text-lime-400 transition-colors duration-300 ease-in-out'
									href='/about'
								>
									About
								</Link>
							</li>
							<li>
								<Link
									className='hover:text-lime-400 transition-colors duration-300 ease-in-out'
									href='/projects'
								>
									Projects
								</Link>
							</li>
							<li>
								<Link
									className='hover:text-lime-400 transition-colors duration-300 ease-in-out'
									href='/blog'
								>
									Blog
								</Link>
							</li>
							<li>
								<Link
									className='hover:text-lime-400 transition-colors duration-300 ease-in-out'
									href='/contact'
								>
									Contact
								</Link>
							</li>
						</ul>
					</nav>
				</div>
			</div>

			<div className='flex items-center gap-2'>
				<button className='bg-black hover:bg-lime-400 hover:text-black transition-colors duration-300 ease-in-out text-lime-400 px-4 py-2 rounded-md'>
					Something
				</button>
			</div>
		</header>
	)
}
