import Image from "next/image";
import React from "react";

const BlogContent = () => {
    const numbers = [1, 2, 3, 4, 5];
  
    return (
      <div className="flex w-full h-full px-7">
        {numbers.map((number) => (
          <div key={number} className="flex my-5 mx-3 flex-col w-[20%] h-[40vh]">
            <p className="flex flex-1 rounded-lg">
              <Image
                className="flex rounded-lg"
                src="https://imageio.forbes.com/specials-images/imageserve/64e74ad803781abed13b0612/Apple--iPhone--iPhone-15--iPhone-15-Pro--iPhone-15-Pro-Max--iPhone-15-release--new/0x0.jpg?format=jpg&crop=1275,956,x113,y0,safe&width=960"
                alt="picture"
                width="500"
                height="100"
              />
            </p>
            <p className="flex h-10 items-center mt-3 font-medium text-gray-500">
              CATEGORY
            </p>
            <div className="flex h-15 items-center py-5">
              <span className="flex h-10 w-1 bg-red-900"></span>
              <p className="flex px-2">Iphone 15 pro max Title of the phone</p>
            </div>
          </div>
        ))}
      </div>
    );
  };
  
  export default BlogContent;
  
