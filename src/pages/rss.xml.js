import { getCollection } from 'astro:content';
import rss from '@astrojs/rss';
import { SITE_DESCRIPTION, SITE_TITLE } from '../consts';

export async function GET(context) {
	const sessions = await getCollection('session');
	return rss({
		title: SITE_TITLE,
		description: SITE_DESCRIPTION,
		site: context.site,
		items: sessions
			.sort((a, b) => b.data.date.valueOf() - a.data.date.valueOf())
			.map((session) => ({
				title: session.data.title,
				description: session.data.summary,
				pubDate: session.data.date,
				link: `/session/${session.id}/`,
			})),
	});
}
