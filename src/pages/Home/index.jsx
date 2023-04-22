import { Fragment } from "react";
import Playlists from "../../components/Playlists";
import styles from "./styles.module.scss";
// import playlistImg from "../../images/rock.jpg";
import harris from "../../images/harris.png";
import beast from "../../images/beast.png"
import pacha from "../../images/pacha.png"
import rakita from "../../images/rakita.jpeg"

const playlists = [
	{ _id: 1, img: harris, name: "Today's Top Songs", desc: "By Ramanagiri" },
	{ _id: 1, img: beast, name: "Today's Top Songs", desc: "By Ramanagiri" },
	{ _id: 1, img: pacha, name: "Today's Top Songs", desc: "By Ramanagiri" },
	{ _id: 1, img: rakita, name: "Today's Top Songs", desc: "By Ramanagiri" },
	{ _id: 1, img: harris, name: "Today's Top Songs", desc: "By Ramanagiri" },
	
];
const playlists1 = [
	{ _id: 1, img: harris, name: "Today's Top Songs", desc: "By Ramanagiri" },
	{ _id: 1, img: harris, name: "Today's Top Songs", desc: "By Ramanagiri" },
	{ _id: 1, img: harris, name: "Today's Top Songs", desc: "By Ramanagiri" },
	{ _id: 1, img: harris, name: "Today's Top Songs", desc: "By Ramanagiri" },
	{ _id: 1, img: harris, name: "Today's Top Songs", desc: "By Ramanagiri" },
	
];
const playlists2 = [
	{ _id: 1, img: harris, name: "Today's Top Songs", desc: "By Ramanagiri" },
	{ _id: 1, img: harris, name: "Today's Top Songs", desc: "By Ramanagiri" },
	{ _id: 1, img: harris, name: "Today's Top Songs", desc: "By Ramanagiri" },
	{ _id: 1, img: harris, name: "Today's Top Songs", desc: "By Ramanagiri" },
	
];

const Home = () => {
	return (
		<Fragment>
			<div className={styles.container}>
				<h1>Good afternoon</h1>
				<div className={styles.playlists_container}>
					<Playlists playlists={playlists} />
					
				</div>
				<h1>Just the hits</h1>
				<div className={styles.playlists_container}>
					 <Playlists playlists={playlists1} />
				</div>
				<h1>Recommeded for you</h1>
				<div className={styles.playlists_container}>
					 <Playlists playlists={playlists2} />
				</div>
			</div>
		</Fragment>
	);
};

export default Home;
