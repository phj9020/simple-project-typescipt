import styled from '@emotion/styled';
import React from 'react';

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

type HeaderProp = {
    onSearch: (arg: string) => void;
}

function Header({onSearch} : HeaderProp) {
    const [query, setQuery] = React.useState<string>("");
    const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault(); 
        onSearch(query);
        
    }
    const handleSearch = (e: React.ChangeEvent<HTMLInputElement>) => {
        setQuery(e.currentTarget.value);
    }
    return (
        <HeaderContainer>
            <Nav>
                <img src="/images/logo.png" alt="logo" />
                <h1>Youtube</h1>
                <SearchForm onSubmit={handleSubmit}>
                    <SearchInput type="text" placeholder='검색어를 입력해주세요.' onChange={handleSearch} value={query} />
                    <SubmitInput type="submit" value="검색" />
                </SearchForm>
            </Nav>
        </HeaderContainer>
    )
}

export default Header