import "./OurBlogs.css";
import SectionTitle from "../shared-components/SectionTitle";
import BlogItem from "./BlogItem";
import LoadBtn from "../shared-components/LoadBtn";

const OurBlogs = () => {
  return (
    <div>
      <SectionTitle text="Our Blogs" />
      <div className="blogsItems">
        <BlogItem />
        <BlogItem />
        <BlogItem />
      </div>
      <LoadBtn />
    </div>
  );
};

export default OurBlogs;
