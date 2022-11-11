import { Helmet } from "react-helmet";
import foto from "../assets/app-logo.png";

export function HtmlHead({ title, description, link }) {
	return (
		<Helmet>
			<title>{`${title} · GDSC Assignment`}</title>
			<meta name="description" content={description} />
			<link rel="icon" href={foto} />
		</Helmet>
	);
}
