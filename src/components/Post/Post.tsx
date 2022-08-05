import { ChangeEvent, FormEvent, useState } from "react";

import { format, formatDistanceToNow } from "date-fns";

import { Avatar } from "../Avatar/Avatar";
import { Comment } from "../Comment/Comment";

import ptBr from "date-fns/locale/pt-BR";
import styles from "./Post.module.css";

interface Author {
	name: string;
	rule: string;
	avatarUrl: string;
}

interface Content {
	type: string;
	content: string;
}

interface PostProps {
	author: Author;
	publishedAt: Date;
	content: Content[];
}

export function Post({ author, content, publishedAt }: PostProps) {
	const [comments, setComments] = useState(["Primeiro comentário"]);
	const [newCommentText, setNewCommentText] = useState("");

	const publishedDateFormatted = format(
		publishedAt,
		"d 'de' LLLL 'às' HH:mm'h'",
		{
			locale: ptBr,
		}
	);

	const publishedRelativeDateToNow = formatDistanceToNow(publishedAt, {
		locale: ptBr,
		addSuffix: true,
	});

	function handleCreateNewComment(event: FormEvent) {
		event.preventDefault();

		setComments([...comments, newCommentText]);
		setNewCommentText("");
	}

	function handleChangeNewComment(event: ChangeEvent<HTMLTextAreaElement>) {
		const { value } = event.target;

		setNewCommentText(value);
	}

	function deleteComment(commentToDelete: string) {
		const removeComment = comments.filter(
			(comment) => comment !== commentToDelete
		);

		setComments(removeComment);
	}

	const isNewCommentEmpty = newCommentText.length === 0;

	return (
		<article className={styles.post}>
			<header>
				<div className={styles.author}>
					<Avatar hasBorder src={author.avatarUrl} />
					<div className={styles.authorInfo}>
						<strong>{author.name}</strong>
						<span>{author.rule}</span>
					</div>
				</div>

				<time dateTime={publishedDateFormatted}>
					{publishedRelativeDateToNow}
				</time>
			</header>

			<div className={styles.content}>
				{content.map((line) => {
					return <p key={line.content}>{line.content}</p>;
				})}
			</div>

			<form onSubmit={handleCreateNewComment} className={styles.commentForm}>
				<strong>Deixe seu Feedback</strong>

				<textarea
					name="comments"
					value={newCommentText}
					onChange={handleChangeNewComment}
					required
				/>

				<footer>
					<button type="submit" disabled={isNewCommentEmpty}>
						Comentar
					</button>
				</footer>
			</form>

			<div className={styles.commentList}>
				{comments.map((comment) => {
					return <Comment content={comment} onDeleteComment={deleteComment} />;
				})}
			</div>
		</article>
	);
}
