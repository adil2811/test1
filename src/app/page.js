import Image from "next/image";
import data from "./data.json";

export default function Home() {
  console.log(data);
  const course = data[0].course;
  const instructor = data[0].instructor;
  const about_instructor = data[0].about_instructor;
  const testimonial = data[0].testimonial;
  const what_to_expect = course.what_to_expect;
  const key_topics = course.key_topics;
  console.log("✌️what_to_expect --->", what_to_expect);

  function removeHtmlTags(html) {
    return html.replace(/<[^>]*>?/gm, "");
  }

  const imageUrl =
    "https://imgs.search.brave.com/yjwu6F1mDOozAW88aPZ3y7toVpLhs1tzKHzf9I4kohM/rs:fit:860:0:0/g:ce/aHR0cHM6Ly93YWxs/cGFwZXJhY2Nlc3Mu/Y29tL2Z1bGwvNTEx/OTU3MS5qcGc";

  return (
    <div className="mx-4 sm:mx-10 md:mx-20 lg:mx-32">
      {/* Adjust the margins based on your layout */}
      <div className="relative">
        <img src={imageUrl} alt="Overlay" className="w-full h-[440px]" />
        <div className="absolute top-[70%] left-0 transform -translate-y-1/2 text-white p-4">
          <h1 className="mt-10 text-white">{instructor.name}</h1>
          <br />
          <span className="text-3xl text-white ">
            {course.title.slice(0, 37)}
            <br />
            <span className="ml-2">
              {course.title.slice(37, 64)}
              <br />
            </span>
            <span className="ml-10">{course.title.slice(64)}</span>
          </span>
        </div>
      </div>
      <div className="grid grid-cols-2 gap-4">
        <div className="bg-gray-100 p-4">
          <ul className="flex ml-20">
            <li className="mr-10 hover:underline cursor-pointer">About</li>
            <li className="mr-10 hover:underline cursor-pointer">Instructor</li>
            <li className="hover:underline cursor-pointer">Reviews</li>
          </ul>
          <div className="mt-10">
            <h1 className="mt-10 text-2xl ml-10">
              <b>About the Course</b>
            </h1>
            <p className="text-justify px-6 mt-4">
              {removeHtmlTags(about_instructor.html_content.slice(3, -5))}
            </p>
            <h2 className="mt-5 text-xl ml-10">
              <b>What to expect from the course</b>
            </h2>
            <div className="ml-6">
              {removeHtmlTags(what_to_expect.html_content.slice(0, 42))}
              <br />
              {removeHtmlTags(what_to_expect.html_content.slice(42, 71))}
              <br />
              {removeHtmlTags(what_to_expect.html_content.slice(71))}
              <br />
            </div>
            <br />
            <span className="ml-10 text-xl mt-[10px]">
              <b>Key topics covered</b>
            </span>
            <p className="text-justify px-6 mt-4">
              {removeHtmlTags(key_topics.html_content)}
            </p>
          </div>
        </div>
        <div className="bg-gray-100 w-[420px] h-[250px] p-4 ml-[90px] mt-[-80px] z-10">
          <h1>
            <b>course fee</b>
          </h1>
          <span className="text-3xl">
            <b>
              {course.fee.amount} {course.fee.currency ? "₹" : null}
            </b>
          </span>

          <h1 className="mt-3">
            <b>{`what's include`}</b>
          </h1>
          <ul>
            <li className="mt-2">
              on_demand_videos:{course.inclusions.on_demand_videos}
            </li>
            <li className="mt-2">
              live_qa_sessions:
              {course.inclusions.live_qa_sessions ? "yes" : "no"}
            </li>
            <li className="mt-2">
              whatsapp_community:
              {course.inclusions.whatsapp_community ? "yes" : "no"}
            </li>
          </ul>
          <button className="flex bg-purple-500 hover:bg-purple-700 text-white font-bold py-2 px-10 ml-20 mt-4 rounded-full items-center ">
            Register Now
          </button>
        </div>
      </div>
      <div>
        <h3 className="mt-10 text-2xl ml-10">
          <b>About the Instructor</b>
        </h3>
        <div className="grid grid-cols-2 gap-4 mt-4 ">
          <div className="bg-gray-100 p-4">
            <div className="flex">
              <p className="ml-10">
                {removeHtmlTags(about_instructor.html_content)}
              </p>
            </div>
          </div>
          <div className="bg-gray-100 p-4">
            test test test test test test test test test test test test test
            test test test test test test test test test test test test test
            test test test test test test test test test test test test test
            test test test test test test test test test test test test test
            test test test test test test test test test test test test test
            test test test test test test test test test test test test test
            test test test test test test
          </div>
        </div>
      </div>
      <div className="mt-10 text-justify px-10  ">
        <span
          className="block  break-words ml-[200px]"
          style={{ textJustify: "inter-word", textIndent: "1em" }}
        >
          <b>{testimonial?.text}</b>
        </span>
        <div className="flex items-center justify-center mt-4 px-20">
          <div className="w-10 h-10 bg-blue-500 rounded-full flex justify-center mr-3">
            <span className="text-white font-bold mt-2">A</span>
          </div>
          <span className="font-semibold">
            {testimonial?.reviewer_name}
            <br />
            <span className="text-[12px] mt-[-2px]">
              {testimonial?.reviewer_designation}
            </span>
          </span>
        </div>
      </div>
      <div className="h-10"></div>
    </div>
  );
}
