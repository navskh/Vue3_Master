<template>
	<header>
		<nav class="navbar navbar-dark navbar-expand-sm bg-primary">
			<div class="container-fluid">
				<a class="navbar-brand" href="#">Young's Page</a>
				<button
					class="navbar-toggler"
					type="button"
					data-bs-toggle="collapse"
					data-bs-target="#navbarSupportedContent"
					aria-controls="navbarSupportedContent"
					aria-expanded="false"
					aria-label="Toggle navigation"
				>
					<span class="navbar-toggler-icon"></span>
				</button>
				<div class="collapse navbar-collapse" id="navbarSupportedContent">
					<ul class="navbar-nav me-auto">
						<li class="nav-item">
							<RouterLink class="nav-link" active-class="active" to="/"
								>Home</RouterLink
							>
						</li>
						<li class="nav-item">
							<RouterLink class="nav-link" active-class="active" to="/about"
								>About</RouterLink
							>
						</li>
						<li class="nav-item">
							<RouterLink class="nav-link" active-class="active" to="/posts"
								>게시글</RouterLink
							>
						</li>
						<li class="nav-item">
							<RouterLink class="nav-link" active-class="active" to="/nested"
								>Nested</RouterLink
							>
						</li>
					</ul>
					<form class="d-flex" role="search">
						<button class="btn btn-outline-light" type="submit" @click="goPage">
							글쓰기
						</button>
					</form>
				</div>
			</div>
		</nav>
	</header>
</template>

<script setup>
import { useRouter } from 'vue-router';

const router = useRouter();
const goPage = () => {
	router.push('/posts/create');
};
</script>

<style lang="scss" scoped></style>
