import AnalysticDashboardCard from "./reusable-ui/AnalysticDashboardCard";

export default function Services() {
  return (
    <div className=" text-white flex flex-col items-center gap-20 px-5">
      <div className="w-[472px] py-6 flex flex-col items-center gap-6 text-center ">
        <div className=" w-[450px] p-[10px]">
          <h2 className=" text-5xl font-medium leading-[57.6px] tracking-[-0.32px]">
            Features that work for your future.
          </h2>
        </div>
        <p className=" text-lg leading-[28.8px]  text-my_white/80">
          Check out our amazing features and experience the power of Vaultflow
          for yourself.
        </p>
      </div>
      <div className="w-[1200px] p-[10px] flex flex-col items-center gap-20">
        <div className=" w-full flex gap-6">
          <AnalysticDashboardCard
            iconSrc="icon1.png"
            title="Analytics Dashboard"
            content=" Our Analytics Dashboard provides a clear and intuitive interface for you
            to easily analyze your data. From customizable graphs to real-time data
            updates, our dashboard offers everything you need to gain valuable
            insights."
            link="View dashboard"
            className="w-1/2 complete-shadow p-[60px]"
            contentClassName="pr-0.5"
          />
          <AnalysticDashboardCard
            iconSrc="icon2.png"
            title="Digital Credit Tokens"
            content=" Reward your customers and incentivize engagement with our innovative digital credit tokens. Our tokens can be customized to match your branding, and are a flexible and scalable way to drive customer loyalty and encourage repeat business."
            link="View tokens"
            className="w-1/2 complete-shadow p-[60px]"
          />
        </div>
        <div className="p-[60px] w-full complete-shadow flex items-center gap-4">
          <AnalysticDashboardCard
            iconSrc="icon3.png"
            title="Code collaboration"
            content="Our advanced code synchronization technology ensures that your data is always up-to-date and accurate, no matter where it's coming from. Whether you're integrating data from multiple sources or working with a team of developers, our synchronization technology makes it easy to collaborate and ensure that your data is consistent and reliable."
            link="View code collaboration"
            className="w-[45%]"
          />
          <div className=" w-7/12 flex justify-end ">
            <img
              src="digital-token.png"
              alt="digital-token"
              className=" w-[79%]"
            />
          </div>
        </div>
      </div>
    </div>
  );
}
