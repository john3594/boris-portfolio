
const Home = () => {
    return (
        <div>
            <div className={`container mx-auto px-12 max-sm:px-6 py-4 flex  shadow-lg items-center rounded-xl`}>
                <div className="flex-[1_1_70%] px-12 max-sm:px-0 flex flex-col gap-12">
                    <div className="flex flex-col gap-4 mt-32">
                        <h1 className="font-black text-4xl leading-[50px]">Web Developer<br /></h1>
                        <div className='grid grid-cols-1 gap-4 lg:grid-cols-3'>
                            <div className='border border-grey-200 border-outline rounded-2xl'><img src={require('../assets/img/web.png')} alt="" /></div>
                            <div className='border border-grey-200 border-outline rounded-2xl'><img src={require('../assets/img/Ai.png')} alt="" /></div>
                            <div className='border border-grey-200 border-outline rounded-2xl'><img src={require('../assets/img/blockchain.png')} alt="" /></div>
                        </div>
                        <p className="font-thin text-4xl leading-8 mt-12">I’m <span className="font-bold underline">John Boris</span>, a web developer and AI & Blockchain enthusiast. </p>
                        <li className="font-thin text-2xl leading-8 mt-4 ml-12">I’m developer where we develop technologies that grow and consolidate industries.</li>
                        <li className="font-thin text-2xl leading-8 mt-4 ml-12">I like playing football and love spending time outdoors in Nature</li>
                        <li className="font-thin text-2xl leading-8 mt-4 ml-12 mb-36 ">Got something to say or need any kind of help please feel free to reach out I'll try my best to respond.</li>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Home;