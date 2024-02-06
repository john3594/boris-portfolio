

const NotFound = () => {
    return (
        <div className={`container mx-auto px-12 max-sm:px-6 py-4 flex  shadow-lg`}>
            <p className="text-4xl mt-40">403 Error</p>
            <br />
            <p className="text-4xl mt-40 ml-36 mb-40">Not Found.</p>
            <br />
            <p className="text-4xl mt-40 ml-36 mb-96">You cannot find this page. </p>
        </div>
    )
}

export default NotFound;