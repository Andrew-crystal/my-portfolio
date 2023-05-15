// import { fetchProjects } from '~/lib/projects';
import { Layout } from '~/layouts';
import { Animate, List } from '~/components';
import { ListActionType } from '~/types';

import type { GetStaticProps } from 'next';

import type { ListAction, Project } from '~/types';

interface ProjectProps {
	stringifiedProjects: string;
}

export const getStaticProps: GetStaticProps<ProjectProps> = () => {
	const projects = [
		{
			description:
				'  Conference Central Website that allow you to manage your upcoming conferences.',
			icon: '🤝',
			homepage: 'https://conference-app-fullstack.appspot.com/',
			name: 'CONFERENCE CENTRAL WEB SITE',
			post: undefined,
			template: false,
			url: '',
		},
		{
			description: '  NFT Marketplace on Pulse chain',
			icon: '🪙',
			homepage: 'https://nftonpulse.io/',
			name: 'NFTonPulse',
			post: undefined,
			template: false,
			url: '',
		},
		{
			description:
				'  A smart restaurant system proving billing management, kitchen management, QR Orders, Order settlement etc.',
			icon: '🍽️',
			homepage: 'https://www.servofeat.com/',
			name: 'Restaurant POS Systems',
			post: undefined,
			template: false,
			url: '',
		},
		{
			description: '  Computer based services and corporate trainings online/offline.',
			icon: '🏢',
			homepage: 'https://ether-channels-business.vercel.app/',
			name: 'Etherchanel solution service',
			post: undefined,
			template: false,
			url: '',
		},
		{
			description: '  Website page of a company offering Human Capital Management services.',
			icon: '👨‍💼',
			homepage: 'https://daywax.netlify.app/',
			name: 'Landing Page Website',
			post: undefined,
			template: false,
			url: '',
		},
		{
			description: '  Kind of e-commerce website like shopify.',
			icon: '🛒',
			homepage: 'https://serdargokhan-e-commerce.netlify.app/',
			name: 'Shopify Clone',
			post: undefined,
			template: false,
			url: '',
		},
		{
			description: '  Personal portfolio that you see now!😉 ',
			icon: '🌿',
			homepage: 'https://about-jeff.web.app',
			name: 'Jeff Graves Portfolio',
			post: undefined,
			template: false,
			url: '',
		},
	];

	return {
		props: {
			stringifiedProjects: JSON.stringify(projects),
		},
		revalidate: 3600,
	};
};

export default function ProjectsPage({ stringifiedProjects }: ProjectProps): JSX.Element {
	const projects = JSON.parse(stringifiedProjects) as Array<Project>;

	return (
		<Layout.Default seo={{ title: 'nuro ─ projects' }}>
			<div className="my-24 mx-2 sm:mx-6 lg:mb-28 lg:mx-8">
				<div className="relative max-w-xl mx-auto">
					<List.Container>
						{projects.map((project, index) => (
							<Animate
								animation={{ y: [50, 0], opacity: [0, 1] }}
								key={index}
								transition={{
									delay: 0.1 * index,
								}}>
								<List.Item
									actions={[
										...(project.post
											? [
													{
														type: ListActionType.LINK,
														external: false,
														href: project.post,
														icon: 'feather:edit-3',
														label: `Blog post about ${project.name}`,
													} as ListAction,
											  ]
											: []),
										...(project.homepage
											? [
													{
														type: ListActionType.LINK,
														href: project.homepage,
														icon: 'feather:home',
														label: `${project.name} homepage`,
													} as ListAction,
											  ]
											: []),
										// {
										// 	type: ListActionType.LINK,
										// 	href: project.url,
										// 	icon: 'feather:github',
										// 	label: 'GitHub Repository',
										// },
									]}
									description={project.description}
									icon={<span className="text-xl">{project.icon}</span>}
									title={project.name}
								/>
							</Animate>
						))}
					</List.Container>
				</div>
			</div>
		</Layout.Default>
	);
}
