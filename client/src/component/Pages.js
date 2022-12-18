import React from 'react'
import { Pagination } from "react-bootstrap"
import { useSelector, useDispatch} from 'react-redux'
import { setPage } from '../store/slices/deviceSlice'


const Pages = () => {
  const { totalCount, limit, page } = useSelector((state) => state.device)
    const dispatch = useDispatch()
    const pageCount = Math.ceil(totalCount / limit)
    const pages = []
    for (let i = 0; i < pageCount; i++) {
        pages.push(i + 1)
    }

    return (
        <Pagination className="mt-3">
            {pages.map(item =>
                <Pagination.Item
                    key={item}
                    active={page === item}
                    onClick={() => dispatch(setPage(item))}
                >
                    {item}
                </Pagination.Item>
            )}
        </Pagination>
    );
}

export default Pages
