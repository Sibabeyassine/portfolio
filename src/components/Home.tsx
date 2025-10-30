import { Mail } from "lucide-react";
import image from "../assets/image.png";
const Home = () => {
  return (
    <div id = "Home" className="flex flex-col-reverse|flex-row justify-center items-center md:my-32 my-10">
      
      <div className="flex flex-col">
          <h1 className="text-5xl md:text-6xl
          font-bold text-center md:text-left
          mt-4 md:mt-0">
            Bonjour, <br /> je suis {"  "}
            <span
            className="text-info">YasDev</span>
          </h1>

          <p className=" my-4 text-md text-center
          md:text-left ">
            je suis un développeur full-stack
            <br />
            avec 2 ans d'expérience, utilisant
            React <br /> et Node.js.
            contactez-moi si vous avez besoin
            de mes services.
          </p>
          <a href="#" className=" btn btn-info md:w-fit">
            <Mail className="w-5 h-5" />
            Contactez-moi
          </a>
      </div>

        <div className="md:ml-60">
              <img src={image} alt="" className="w-96 h-96 object-cover
              border-8 border-info shadow-xl"
              style={{
                borderRadius: "30% 70% 70% 30% / 67% 62% 38% 33%"
              }}
              />
        </div>
    </div>
  )
}

export default Home
