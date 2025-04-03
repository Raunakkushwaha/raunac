import SocialMediaIcons from "../components/SocialMediaIcons";

const Footer = () => {
  return (
    <footer className="h-60 bg-black pt-6 mt-7">
      <div className="w-10/12 mx-auto">
        <SocialMediaIcons />
        <div className="md:flex justify-center md:justify-between text-center ">
          <p className="font-playfair font-semibold text-2xl text-yellow">
            RAUNAK KUSHWAHA
          </p>
          <p className="font-playfair text-md text-yellow">
            ©2022 raunac. All Rights Reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
