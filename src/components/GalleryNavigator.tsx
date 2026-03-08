import { PhotoProvider, PhotoView } from "react-photo-view";

export default function GalleryNavigator({ images }: { images: string[] }) {
  return (
    <PhotoProvider maskOpacity={0.5}>
      <div className="flex p-4 gap-2 w-full justify-center lg:gap-0.5 ">
        {images.map((src, index) => (
          <PhotoView key={index} src={src}>
            <img
              src={src}
              alt={src}
              className="w-1/2 rounded-lg cursor-pointer md:w-1/3 lg:w-1/2 md:h-96 object-cover"
            />
          </PhotoView>
        ))}
      </div>
    </PhotoProvider>
  );
}
