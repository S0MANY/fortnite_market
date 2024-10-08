function Pagination(props) {
    return(
        <div className="pagination">
            <div onClick={() => props.prev()} className="prev">Prev</div>
            <div onClick={() => props.next()} className="next">Next</div>
        </div>
    )
}

export { Pagination}