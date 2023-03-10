import { sveltekit } from "@sveltejs/kit/vite";
import { defineConfig } from "vitest/config";

export default defineConfig({
	plugins: [sveltekit()],

	// 서버 옵션 설정
	server: {
		host: true, //서버 IP 설정
		port: 9999, //서버 포트 설정
		//origin: "",	//origin 헤더 설정
		open: "/", //서버 시작 후 자동으로 브라우저에 보여줄 페이지 경로 설정
		cors: true, //CORS 설정 (boolean으로는 모든 Origin 허용/차단만 설정 가능하고 특정 Origin 설정은 cors 패키지에서 제공하는 CorsOption 객체 이용)
	},

	//Preview : 배포 결과물을 로컬에서 테스트할 때 사용
	preview: {
		port: 4173, //서버 포트(로컬 접속) 설정
	},

	test: {
		include: ["src/**/*.{test,spec}.{js,ts}"],
	},
});
