import thankYou from "../assets/images/thank-you.webp";

const Success = () => {
  return (
    <div className="flex flex-col items-center text-center mx-4 lg:mx-24">
      <img src={thankYou} alt="Thank you" className="" />

      <h1>
        Thank you for visiting my page and taking the time to explore my work!
      </h1>
      <p>
        If you're interested in collaborating or have any opportunities, feel
        free to reach out.
      </p>

      <a
        href="mailto:francoaguirretrabajo@gmail.com"
        className="w-full lg:w-[50%] mt-6 bg-main flex items-center justify-center text-lg text-white px-10 py-3 gap-3 font-semibold rounded-lg hover:scale-110 transition-transform"
      >
        <button className="flex items-center gap-2">
          Contact Me
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="24"
            height="24"
            viewBox="0 0 24 24"
            strokeWidth="2"
            stroke="currentColor"
            fill="none"
            strokeLinecap="round"
            strokeLinejoin="round"
          >
            <path stroke="none" d="M0 0h24v24H0z" fill="none"></path>
            <path d="M3 7a2 2 0 0 1 2 -2h14a2 2 0 0 1 2 2v10a2 2 0 0 1 -2 2h-14a2 2 0 0 1 -2 -2v-10z"></path>
            <path d="M3 7l9 6l9 -6"></path>
          </svg>
        </button>
      </a>
    </div>
  );
};

export default Success;
