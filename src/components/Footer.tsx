export default function Footer() {
	return (
		<footer className='flex flex-col gap-4 items-center p-4 mt-auto'>
			<div className='flex items-center gap-2'>
				<ul className='flex items-center gap-3 text-gray-500 '>
					<li>
						<a
							href='https://github.com/0xkr3p'
							className='hover:text-lime-400 transition-colors duration-300 ease-in-out'
							target='_blank'
							rel='no-referrer'
						>
							<svg
								xmlns='http://www.w3.org/2000/svg'
								height='20'
								viewBox='0 0 16 16'
								width='20'
								aria-hidden='true'
								className='block'
							>
								<path
									fill='currentColor'
									d='M8 0C3.58 0 0 3.58 0 8c0 3.54 2.29 6.53 5.47 7.59.4.07.55-.17.55-.38 0-.19-.01-.82-.01-1.49-2.01.37-2.53-.49-2.69-.94-.09-.23-.48-.94-.82-1.13-.28-.15-.68-.52-.01-.53.63-.01 1.08.58 1.23.82.72 1.21 1.87.87 2.33.66.07-.52.28-.87.51-1.07-1.78-.2-3.64-.89-3.64-3.95 0-.87.31-1.59.82-2.15-.08-.2-.36-1.02.08-2.12 0 0 .67-.21 2.2.82.64-.18 1.32-.27 2-.27.68 0 1.36.09 2 .27 1.53-1.04 2.2-.82 2.2-.82.44 1.1.16 1.92.08 2.12.51.56.82 1.27.82 2.15 0 3.07-1.87 3.75-3.65 3.95.29.25.54.73.54 1.48 0 1.07-.01 1.93-.01 2.2 0 .21.15.46.55.38A8.013 8.013 0 0016 8c0-4.42-3.58-8-8-8z'
								></path>
							</svg>
						</a>
					</li>
					<li>
						<a
							href='https://x.com/0xkr3p'
							className='hover:text-lime-400 transition-colors duration-300 ease-in-out'
							target='_blank'
							rel='no-referrer'
						>
							<svg
								xmlns='http://www.w3.org/2000/svg'
								viewBox='0 0 1200 1227'
								fill='currentColor'
								aria-hidden='true'
								className='block'
								width='16'
								height='16'
							>
								<path d='M714.163 519.284 1160.89 0h-105.86L667.137 450.887 357.328 0H0l468.492 681.821L0 1226.37h105.866l409.625-476.152 327.181 476.152H1200L714.137 519.284h.026ZM569.165 687.828l-47.468-67.894-377.686-540.24h162.604l304.797 435.991 47.468 67.894 396.2 566.721H892.476L569.165 687.854v-.026Z'></path>
							</svg>
						</a>
					</li>
				</ul>
			</div>
			<div className='flex items-center gap-2'>
				<span className='text-sm text-gray-500'>
					&copy; {new Date().getFullYear()} made by{' '}
					<a
						href='https://github.com/0xkr3p'
						className='font-bold underline text-lime-400 transition-colors duration-300 ease-in-out tracking-wide'
					>
						krep
					</a>{' '}
					all rights reserved.
				</span>
			</div>
		</footer>
	)
}
