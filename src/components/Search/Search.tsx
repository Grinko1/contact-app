import './Search.scss';
import search from '../../img/search.png'
import { useNavigate } from 'react-router';
import { FC } from 'react';

interface ISearchProps {
    searchValue: string,
    setSearchValue:(e:string) =>void
}
const Search:FC<ISearchProps> = ({searchValue, setSearchValue}) => {

    const navigate = useNavigate()

    const handleSearch = (e: React.ChangeEvent<HTMLInputElement>) => {
        setSearchValue(e.target.value)
    }
    return (
        <div className='top'>
            <div className="top__search">
              <img src={search} alt="" className='top__search-img'/>
            <input 
            placeholder='Введите имя...'
            className='top__search-input'
            value={searchValue}
            onChange={handleSearch}
            />   
            </div>
            <div className="top__add">
                <button className="top__add-btn" onClick={()=> navigate('/add-contact')}>Добавить контакт</button>
            </div>
        </div>
    );
};

export default Search;