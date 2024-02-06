
import resume from "../assets/pdf/resume.pdf"

const About = () => {

  return (
    <div
      className={`h-[90vh] container mx-auto px-36 max-lg:px-24 max-md:px-12 max-sm:px-8 py-4 shadow-lg`}
    >
      <div className="py-12 "></div>
      <div className="grid py-6">
        <div className="flex-[1_1_60%]">
          <p className="font-black text-4xl max-sm:text-3xl max-sm:leading-[48px] leading-[60px]">
            Hi, I'm Boris, <br /> I'm a Full [Stack 😎 | 🥱 Web]  Developer{" "}
          </p>

          <li className="font-thin text-2xl leading-8 mt-4 ml-12">I’m developer where we develop technologies that grow and consolidate industries.</li>
          <li className="font-thin text-2xl leading-8 mt-2 ml-12">I like playing football and love spending time outdoors in Nature</li>
          <li className="font-thin text-2xl leading-8 mt-2 ml-12 mb-4">Got something to say or need any kind of help please feel free to reach out I'll try my best to respond.</li>
          <p className="py-2 font-medium text-2xl max-sm:text-xl max-sm:leading-[48px] leading-[60px]">Do you need to know more about me?  <a className="px-2 active:text-green-600  underline uppercase font-black" href={resume} target="_blank" rel="noreferrer">Click Here</a> to have a look at my resume.</p>
          <div class="bg-white py-24 sm:py-32 shadow-xl">
            <div class="mx-auto max-w-7xl px-6 lg:px-8">
              <dl class="grid grid-cols-1 gap-x-8 gap-y-16 text-center lg:grid-cols-6">
                <div class="mx-auto flex max-w-xs flex-col gap-y-4">
                  <img src={require('../assets/img/checkmark.png')} className="w-8" />React
                </div>
                <div class="mx-auto flex max-w-xs flex-col gap-y-4">
                  <img src={require('../assets/img/checkmark.png')} className="w-8" />Vue
                </div>
                <div class="mx-auto flex max-w-xs flex-col gap-y-4">
                  <img src={require('../assets/img/checkmark.png')} className="w-8" />Django
                </div>
                <div class="mx-auto flex max-w-xs flex-col gap-y-4">
                  <img src={require('../assets/img/checkmark.png')} className="w-8" />Angular
                </div>
                <div class="mx-auto flex max-w-xs flex-col gap-y-4">
                  <img src={require('../assets/img/checkmark.png')} className="w-8" />AI
                </div>
                <div class="mx-auto flex max-w-xs flex-col gap-y-4">
                  <img src={require('../assets/img/checkmark.png')} className="w-8" />TypeScript
                </div>
              </dl>
            </div>
          </div>
        </div>
        <div className="flex-[1_1_40%]"></div>
      </div>
    </div>
  );
};

export default About;
