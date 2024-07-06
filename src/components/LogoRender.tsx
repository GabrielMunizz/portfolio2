import Image, { StaticImageData } from "next/image";

type LogoRenderProps = {
  url: StaticImageData;
  title: string;
};

export default function LogoRender({ url, title }: LogoRenderProps) {
  return (
    <div className="flex flex-col justify-between items-center w-[100px] h-[120px] my-[0.8rem] mx-[1.5rem]">
      <Image
        width={80}
        style={{ minHeight: "80px" }}
        src={url}
        alt={`${title} logo`}
      />
      <p className="bebas text-[1.2rem] mt-[0.5rem]">{title}</p>
    </div>
  );
}
