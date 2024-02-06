

const Contact = () => {

    return (
        <div className={ `container mx-auto px-12 max-sm:px-6 py-4 flex  flex-col shadow-lg max-[360px]:px-4 rounded-xl`}>
            <h1 className="font-black text-4xl leading-[50px]  pt-24 pb-12 px-36 max-sm:px-4 max-sm:py-4">Contact Me</h1>
            <li className="text-2xl px-36 leading-10 font-black  max-sm:px-4 max-sm:text-lg max-lg:px-12">Are you seeking a website that is fast-performing and user-friendly to showcase your product or business? </li>
            <li className="text-2xl px-36 leading-10 font-black  max-sm:px-4 max-sm:text-lg max-lg:px-12">Do you require any form of consultation? </li> <li className="text-2xl px-36 leading-10 font-black  max-sm:px-4 max-sm:text-lg max-lg:px-12">Are there any questions you would like to ask? </li>
            <li className="text-2xl px-36 leading-10 font-black  max-sm:px-4 max-sm:text-lg max-lg:px-12">Do you have any advice for me or simply want to say "Hi, Boris👋"? </li> <p className="text-2xl px-36 leading-10 font-black  max-sm:px-4 max-sm:text-lg max-lg:px-12"> In any case, please feel free to inform me. I will make every effort to respond promptly. 😊 </p>
            <br />
            <p className="text-2xl px-36 leading-10 font-black  max-sm:px-4 max-sm:text-lg max-lg:px-12">
                The most efficient way to contact me is through the following means.</p>
            <div className="flex gap-6 py-12 px-42 flex-wrap max-lg:px-12 max-sm:items-center justify-center ">
                <a href="mailto:johnboris@gamil.com" rel="noreferrer" className="border border-blue-200 rounded-2xl hover:ng-blue-100">
                    <div className={`max-sm:text-base font-black hover:translate-y-1 uppercase text-2xl rounded-full px-12 py-2`}><img src={require('../assets/img/gmail.png')} className="w-10 h-10" />Gmail
                    </div>
                </a>
                <a href="https://join.skype.com" target="_blank" rel="noreferrer" className="border border-blue-200 rounded-2xl hover:bg-blue-100">
                    <div className={`max-sm:text-base font-black hover:translate-y-1 uppercase text-2xl rounded-full px-12 py-2`}><img src={require('../assets/img/skype.png')} className="w-10 h-10"/>Skype
                    </div>
                </a>
                <a href="https://t.me/" target="_blank" rel="noreferrer" className="border border-blue-200 rounded-2xl hover:border-bg-100">
                    <div className={`max-sm:text-base font-black hover:translate-y-1 uppercase text-2xl rounded-full px-12 py-2`}><img src={require('../assets/img/tele.png')} className="w-10 h-10"/>Telegram
                    </div>
                </a>
                <a href="https://discord.gg/NxmEtBF3" target="_blank" rel="noreferrer" className="border border-blue-200 rounded-2xl hover:bg-blue-100">
                    <div className={`max-sm:text-base font-black hover:translate-y-1 uppercase text-2xl rounded-full px-12 py-2`}><img src={require('../assets/img/discord.png')} className="w-10 h-10" />Discord
                    </div>
                </a>
                <a href="https://github.com/johnboris0414" target="_blank" rel="noreferrer" className="border border-blue-200 rounded-2xl hover:bg-blue-100">
                    <div className={`max-sm:text-base font-black hover:translate-y-1 uppercase text-2xl rounded-full px-12 py-2`}><img src={require('../assets/img/github.png')} className="w-10 h-10" />github
                    </div>
                </a>
            </div>
            <div className="py-16 max-xl:py-8"></div>
        </div >
    )
}

export default Contact;