import Head from 'next/head';
import AddTodo from '../components/AddTodo';
import Filters from '../components/Filters';
import VisibleTodoList from '../components/VisibleTodoList';

export default function Home() {
	return (
		<>
			<Head>
				<title>Todo List</title>
			</Head>
			<main>
				<header>
					<h1>Todo List</h1>
					<AddTodo />
				</header>
				<VisibleTodoList />
				<Filters />
			</main>
			<style jsx>{`
				main {
					width: 300px;
					max-width: 90%;
					margin: 0 auto;
					background: #fff;
					border: 1px solid #00322b;
					border-radius: 0.5rem;
					padding-bottom: 1rem;
				}
				header {
					background: #00594c;
					border-bottom: 0;
					border-top-left-radius: 0.5rem;
					border-top-right-radius: 0.5rem;
					padding: 1rem;
				}
				h1 {
					margin: 0 0 1rem;
					color: #fff;
					font-size: 1.5rem;
				}
			`}</style>
		</>
	);
}
