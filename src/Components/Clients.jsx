const Clients = () => {
  return (
    <div className="bg-gradient-to-l from-gray-300 ">
       <div className="text-3xl md:text-5xl lg:text-6xl font-semibold text-center py-10">
        Meet Our Clients
       </div>

       <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-3 mx-auto w-full py-11">
         <div className="flex flex-col items-center justify-center">
            <img className="h-[250px] w-[250px] border-2 border-gray-300 rounded-xl object-cover" src="https://i.ibb.co/C880Hw0/undraw-Engineering-team-a7n2.png" alt="" />
            <div className="py-1 font-semibold text-xl">
              Bankers
            </div>
         </div>
         <div className="flex flex-col items-center justify-center">
            <img className="h-[250px] w-[250px] border-2 border-gray-300 rounded-xl object-cover" src="https://i.ibb.co/B28w0zj/undraw-Start-building-re-xani.png" alt="" />
            <div className="py-1 font-semibold text-xl">
              Designers
            </div>
         </div>
         <div className="flex flex-col items-center justify-center">
            <img className="h-[250px] w-[250px] border-2 border-gray-300 rounded-xl object-cover" src="https://i.ibb.co/2PTW1Mx/undraw-feeling-proud-qne1.png" alt="" />
            <div className="py-1 font-semibold text-xl">
              Artists
            </div>
         </div>
         <div className="flex flex-col items-center justify-center">
            <img className="h-[250px] w-[250px] border-2 border-gray-300 rounded-xl object-cover" src="https://i.ibb.co/f9HtgRT/undraw-netflix-q00o.png" alt="" />
            <div className="py-1 font-semibold text-xl">
              Engineers
            </div>
         </div>

       </div>
    </div>
  );
};

export default Clients;