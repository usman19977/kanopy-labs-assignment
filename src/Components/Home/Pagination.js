import React , { useState } from 'react';
import  { useSelector ,  useDispatch } from 'react-redux';
import '../../Styles/paginate.css';
import { fetchPersons } from '../../Store/Slice/personSlice';
function Pagination() {
    const dispatch = useDispatch();
    const   person  = useSelector(state => state.person)
    const [currentPage , setCurrentPage ] = useState(person.currentPage);
    const [itemsPerPage ] = useState(10);
    const pages = [];

    for(let i = 1; i <= Math.ceil(person.count/itemsPerPage); i++) {
        pages.push(i);
    }


    const handleClick = (event) => {

        setCurrentPage(Number(event.target.id));
        dispatch(fetchPersons(Number(event.target.id)));

    }


    const renderPageNumbers = pages.map((number) => {
        return (
            <li key={number} id={number} onClick={handleClick} className={currentPage === number ? 'active' : null} >{number} </li>
        );
    });


    return (
        <div>
<ul className="pageNumbers">
    {renderPageNumbers}
</ul>
        </div>
    );
}

export default Pagination;