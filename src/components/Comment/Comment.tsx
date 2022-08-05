import { useState } from "react";

import { ThumbsUp, Trash } from "phosphor-react";
import { Avatar } from "../Avatar/Avatar";

import styles from "./Comment.module.css";

export function Comment({ content, onDeleteComment }) {
	const [likeCount, setlikeCount] = useState(0);

	function handleRemoveComment() {
		onDeleteComment(content);
	}

	function handleLikeComment() {
		setlikeCount(likeCount + 1);
	}

	return (
		<div className={styles.comment}>
			<Avatar hasBorder={false} src="https://github.com/diego3g.png" />

			<div className={styles.commentBox}>
				<div className={styles.commentContent}>
					<header>
						<div className={styles.authorAndTime}>
							<strong>Lucas Eduardo</strong>

							<time dateTime="2022-08-02 14:23:45">Publicado há 1 hora</time>
						</div>

						<button>
							<Trash onClick={handleRemoveComment} size={24} />
						</button>
					</header>

					<p>{content}</p>
				</div>

				<footer>
					<button onClick={handleLikeComment}>
						<ThumbsUp /> Aplaudir <span>{likeCount}</span>
					</button>
				</footer>
			</div>
		</div>
	);
}
