"use client";

const Header = () => {
  return (
    <section className="hero ">
      <div className="">
        <img src="/images/profile_image.png" className="w-60" />
      </div>
      <div className="max-w-[45rem]">
        <h1 className=" text-left text-4xl ">
          <span className=" ">Hello I’m Sidi Chaikh a </span>
          <span className="text-[#31C2B2]  ">Software engineer </span>
        </h1>
        <p className="text-xl">
          Motivated front-end development enthusiast with a solid background in
          computer science
        </p>
      </div>

      <div className="btns">
        <button className="primary_btn">linked in</button>
        <button className="secondary_btn">My CV</button>
      </div>
    </section>
  );
};

export default Header;
