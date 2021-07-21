import { Component } from 'react';

class Header extends Component {
    render(){
        return(
            <div className="header">
                <h1>로고</h1>
                <div>
                    <span>자유게시판</span>
                    <span>회사소게</span>
                    <span>API</span>
                    <span>팀원소개</span>
                    <span>포트폴리오</span>
                </div>
            </div>
        );
    }
}

export default Header;