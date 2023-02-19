import React from "react";

const Feature = () => {
  return (
    <div className="w-full h-[700px] bg-green-400 text-white">
      <div className="flex flex-row">
        <div className="w-full md:w-3/6 border h-full px-10">
          <div className="my-10">
            <span className="text-3xl font-semibold ">
              How Does This App Work ?
            </span>
            <div className="w-12 h-1 bg-orange-500" />
          </div>
          <div>
            <div className="text-lg p-5 my-10">
              <p className="font-semibold">Download for Free</p>
              <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Sunt
                accusantium in vitae tenetur quos fuga quia modi nulla minus
                saepe, dolor eligendi reiciendis laboriosam, soluta illo officia
                explicabo, obcaecati dolorum!
              </p>
            </div>
            <div className="text-lg p-5 my-10">
              <p className="font-semibold">Create a Profile</p>
              <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Sunt
                accusantium in vitae tenetur quos fuga quia modi nulla minus
                saepe, dolor eligendi reiciendis laboriosam, soluta illo officia
                explicabo, obcaecati dolorum!
              </p>
            </div>
            <div className="text-lg p-5 my-10">
              <p className="font-semibold">Get your Meal</p>
              <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Sunt
                accusantium in vitae tenetur quos fuga quia modi nulla minus
                saepe, dolor eligendi reiciendis laboriosam, soluta illo officia
                explicabo, obcaecati dolorum!
              </p>
            </div>
          </div>
        </div>
        <div className="w-full md:w-3/6"></div>
      </div>
    </div>
  );
};

export default Feature;
