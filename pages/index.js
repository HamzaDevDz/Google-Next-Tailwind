import Head from "next/Head";
import Avatar from "../components/Avatar";
import {ViewGridIcon} from "@heroicons/react/solid";
import Image from "next/image";
import {SearchIcon, MicrophoneIcon} from "@heroicons/react/outline";

const Home = () => {

    return (
      <div>
          <Head>
              <title>Google</title>
          </Head>
          <header className={"flex w-full justify-between p-5 text-gray-700 text-sm"}>
              <div className={"flex space-x-4 items-center"}>
                  <p className={"link"}>About</p>
                  <p className={"link"}>Store</p>
              </div>
              <div className={"flex space-x-4 items-center"}>
                  <p className={"link"}>Gmail</p>
                  <p className={"link"}>Images</p>
                  <ViewGridIcon className={"h-10 w-10 p-2 rounded-full cursor-pointer hover:bg-gray-100"} />
                  <Avatar url={"avatar.jpg"} />
              </div>
          </header>

          <form className={"flex flex-col items-center mt-40 flex-grow w-full"}>
              <Image
                  src={"/google.png"}
                  width={300}
                  height={100}
              />
              <div className={"flex w-full items-center mt-5 hover:shadow-lg focus-within:shadow-lg max-w-md " +
              "rounded-full border border-gray-200 p-3 sm:max-w-xl lg:max-w-2xl"}>
                  <SearchIcon className={"h-5 mr-3 text-gray-500"} />
                  <input type={"text"}
                         className={"flex-grow focus:outline-none"}
                  />
                  <MicrophoneIcon className={"h-5 mr-3 text-gray-500"}/>
              </div>
              <div className={"flex w-1/2 flex-col space-y-2 mt-8 justify-center items-center" +
              "sm:space-y-0 sm:flex-row sm:space-x-4"}>
                  <button className={"btn"}>Google Search</button>
                  <button className={"btn"}>I'm Feeling Lucky</button>
              </div>
          </form>

      </div>
    )
}
export default Home;
