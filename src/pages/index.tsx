import Headline from "@/components/Headline";
import PlayControl from "@/components/PlayControl";
import Timeline from "@/components/Timeline";

export default function Home() {
  return (
    <div className="h-screen w-full flex justify-center bg-background">
      {/* first container */}
      <div className="flex mt-16">
        <div className="bg-container w-[266px] h-[498px] ml-[191px] rounded-lg">
          <div className="px-[38.41px] mt-12">
            <img className="mb-7 rounded-lg" src="/hans-eiskonen-8Pm_A-OHJGg-unsplash 1.png" />
            <Headline />
            <div className="flex justify-between mt-7">
              <PlayControl />
            </div>
            <Timeline size={'short'} />
          </div>
        </div>
        {/* second container */}
        <div className="flex flex-col">
          <div className="w-[357px] h-[266px] bg-container ml-8 rounded-lg">
            <div className="flex flex-row mt-7 mx-7">
              <img className="w-[84px] h-[84px] rounded-lg" src="/hans-eiskonen-8Pm_A-OHJGg-unsplash 1.png" />
              <div className="ml-7 mt-4">
                <Headline />
              </div>
            </div>
            <div className="flex mt-7 mx-7">
              <div className="flex flex-1 flex-row justify-between mx-14">
                <PlayControl />
              </div>
            </div>
            <div className="mx-7">
              <Timeline size={'medium'} />
            </div>
            
          </div>
          <div className="w-[357px] h-[199px] bg-container ml-8 mt-8 rounded-lg">
            <div className="flex flex-row mt-7 mx-7">
              <img className="w-[84px] h-[84px] rounded-lg" src="/hans-eiskonen-8Pm_A-OHJGg-unsplash 1.png" />
              <div className="ml-7 mt-4">
                <Headline />
              </div>
            </div>
            <div className="flex justify-between mt-7 mx-8">
              <PlayControl />
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
