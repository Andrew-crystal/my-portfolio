export interface TimelineEvent {
	date: Date | string;
	title: string;
	description?: string;
	done?: Array<string>;
	icon: string;
	link?: {
		text: string;
		url: string;
	};
}

export type Timeline = Array<TimelineEvent>;
