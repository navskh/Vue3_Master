<template>
	<div>
		<h2>게시글 수정</h2>
		<hr class="my-4" />
		<div class="mb-3">
			<label for="exampleFormControlInput1" class="form-label">제목</label>
			<input type="email" class="form-control" id="title" />
		</div>
		<div class="mb-3">
			<label for="exampleFormControlTextarea1" class="form-label">내용</label>
			<textarea class="form-control" id="content" rows="3"></textarea>
		</div>
		<div class="pt-4">
			<button
				type="button"
				class="btn btn-outline-dark me-2"
				@click="goDetailPage"
			>
				취소
			</button>
			<button class="btn btn-primary">수정</button>
		</div>
	</div>
</template>

<script setup>
import { useRoute, useRouter } from 'vue-router';

const route = useRoute();
const router = useRouter();

const id = route.params.id;

const goDetailPage = () => router.push({ name: 'PostDetail', params: { id } });
</script>

<style lang="scss" scoped></style>
