import styled from '@emotion/styled';

const HeaderContainer = styled.div`
`
const Nav = styled.nav`
    width: 100%;
    max-width: 1920px;
    margin: 0 auto;
    display: flex;
    align-items: center;
    padding: 0px 20px;
    img {
        margin-right: 10px;
    }
    h1 {
        margin-right: 10px;
    }
`

const SearchForm = styled.form`
    display: flex;
    align-items: center;
    justify-content: center;
`

const SearchInput = styled.input`
    all: unset;
    padding: 4px 8px;
    border: 1px solid gray;  
`

const SubmitInput = styled.input`
    margin-left: 10px;
    padding: 4px 8px;
    cursor: pointer;
`

function Header() {
    return (
        <HeaderContainer>
            <Nav>
                <img src="/images/logo.png" alt="logo" />
                <h1>Youtube</h1>
                <SearchForm>
                    <SearchInput type="text" placeholder='검색어를 입력해주세요.' />
                    <SubmitInput type="button" value="검색" />
                </SearchForm>
            </Nav>
        </HeaderContainer>
    )
}

export default Header