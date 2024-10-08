

function ModalNav(props) {


    return (
        <div className={`modal`}>
            <div className="modal__box">
                <div className="modal__nav">
                    <div className="link active"><a href="!#">Items</a></div>
                    <div className="link"><a href="!#">Upcoming</a></div>
                    <div className="link"><a href="!#">Top</a></div>
                </div>
            </div>
        </div>
    )
}

export { ModalNav }