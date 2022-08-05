import { Header } from "./components/Header/Header";
import { SideBar } from "./components/SideBar/SideBar";
import { Post } from "./components/Post/Post";

import styles from "./App.module.css";
import "./styles/global.css";

const posts = [
	{
		id: 1,
		author: {
			avatarUrl: "https://github.com/lucasedusi.png",
			name: "Lucas Eduardo",
			rule: "Mobile Developer",
		},
		content: [
			{
				type: "paragraph",
				content:
					"Fala galeraa 👋 Acabei de subir mais um projeto no meu portifa",
			},
			{
				type: "paragraph",
				content: "É um projeto que fiz no NLW Return, evento da Rocketseat",
			},
		],
		publishedAt: new Date("2022-08-03 14:23:45"),
	},

	{
		id: 2,
		author: {
			avatarUrl: "https://github.com/diego3g.png",
			name: "Diego",
			rule: "Web Developer",
		},
		content: [
			{
				type: "paragraph",
				content: "Fala galeraa",
			},
			{
				type: "paragraph",
				content: "É um projeto que fiz no NLW Return",
			},
		],
		publishedAt: new Date("2022-08-01 11:23:45"),
	},
];

function App() {
	return (
		<>
			<Header />

			<div className={styles.wrapper}>
				<SideBar />
				<main>
					{posts.map((post) => {
						return (
							<Post
								key={post.id}
								author={post.author}
								content={post.content}
								publishedAt={post.publishedAt}
							/>
						);
					})}
				</main>
			</div>
		</>
	);
}

export default App;
