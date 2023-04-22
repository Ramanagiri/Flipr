import { Fragment } from "react";
import Song from "../../components/Song";
import AccessTimeIcon from "@mui/icons-material/AccessTime";
import styles from "./styles.module.scss";
import likeImg from "../../images/like.jpg";
import peaches from "../../images/peaches.jpg";

const songs = [
	{ _id: 1, img: peaches, name: "Thuli thuli", artist: "Haricharn"},
	{ _id: 2, img: peaches, name: "Kannazhaga", artist: "Dhanush"},
	{ _id: 3, img: peaches, name: "Poongatre", artist: "Benny Dayal"},
	{ _id: 4, img: peaches, name: "Donu Donu", artist: "Dhanush"},
	{ _id: 5, img: peaches, name: "Mynaa Mynaa", artist: "Shaan"},
	{ _id: 6, img: peaches, name: "Jilla Theme", artist: "Hariharan"},
	

];

const LikedSongs = () => {
	return (
		<div className={styles.container}>
			<div className={styles.head}>
				<div className={styles.head_gradient}></div>
				<img src={likeImg} alt="like songs" />
				<div className={styles.playlist_info}>
					<p>Playlist</p>
					<h1>Liked Songs</h1>
					<span>By Ramangiri</span>
				</div>
			</div>
			<div className={styles.body}>
				<div className={styles.body_nav}>
					<div className={styles.left}>
						<span>#</span>
						<p>Title</p>
					</div>
					<div className={styles.center}>
						<p>Artist</p>
					</div>
					<div className={styles.right}>
						<AccessTimeIcon />
					</div>
				</div>

				{songs.map((song) => (
					<Fragment key={song._id}>
						<Song song={song} />
					</Fragment>
				))}
			</div>
		</div>
	);
};

export default LikedSongs;
