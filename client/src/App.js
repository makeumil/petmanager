import React, { Component } from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';

import ResetStyle from './css/Reset.css';

///// Route /////

//Login
import Login from './views/login/Login';
import KakaoCallback from './views/login/KakaoCallback';
import GoogleCallback from './views/login/GoogleCallback';
import NaverCallback from './views/login/NaverCallback';

import Main from './views/Main';
import PetmanDetail from './views/PetmanDetail';
import NotFound from './views/NotFound';
import Notice from './views/Notice';
import Adopt from './views/Adopt';
import AdoptDetail from './views/AdoptDetail';
import AdoptReg from './views/AdoptReg';
import AdoptUpdate from './views/AdoptUpdate';
import PetmanList from './views/PetmanList';
import PetmanReg from './views/PetmanReg';
import Kakao from './views/Map';
import Test from './views/Test';
import ScrollTop from './views/ScrollToTop';


const App = () => {
	return (
		<div className={ResetStyle}>
			<BrowserRouter>
			    <ScrollTop />
				<Routes>
					{/* login */}
					<Route path="/login" element={<Login />}></Route>	
					<Route path="/kakao/auth" element={<KakaoCallback />}></Route>	
					<Route path="/google/auth" element={<GoogleCallback />}></Route>	
					<Route path="/naver/auth" element={<NaverCallback />}></Route>		
					
					<Route path="/" element={<Main />}></Route>					
					<Route path="/content" element={<PetmanDetail />}></Route>
					<Route path="/notice" element={<Notice />}></Route>
					<Route path="/adopt" element={<Adopt />}></Route>
					<Route path="/adopt/detail" element={<AdoptDetail />}></Route>
					<Route path="/adopt/reg" element={<AdoptReg />}></Route>
					<Route path="/adopt/update" element={<AdoptUpdate />}></Route>
					<Route path="/petman/list" element={<PetmanList />}></Route>
					<Route path="/petman/reg" element={<PetmanReg />}></Route>
					<Route path="/map" element={<Kakao />}></Route>
					<Route path="/test" element={<Test />}></Route>
					{/* <Route path="/product/*" element={<Product />}></Route> */}
					{/* 상단에 위치하는 라우트들의 규칙을 모두 확인, 일치하는 라우트가 없는경우 처리 */}
					<Route path="*" element={<NotFound />}></Route>
					
				</Routes>
			</BrowserRouter>
		</div>
	);
}

export default App;