import Description from "@/components/Description";
import DownloadCV from "@/components/DownloadCV";
import Stacks from "@/components/Stacks";
import Title from "@/components/Title";
// COLOCAR TEXTO DESCRITIVO E STACKS ABAIXO DE ABOUT ME

export default function AboutMe() {
  return (
    <div className="flex flex-col justify-center items-center min-w-full min-h-[100vh]">
      <div className="flex flex-row justify-around items-center border-2 border-white w-[80%] mt-[10vh] rounded-lg">
        <div className="w-[40%] text-center">
          <Title>Image</Title>
        </div>
        <div className="flex flex-col items-center w-[40%]">
          <Title>About Me</Title>
          <Description />
          <Stacks />
          <DownloadCV />
        </div>
      </div>
    </div>
  );
}
