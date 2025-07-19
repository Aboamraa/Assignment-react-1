import avatarImage from "../../../assets/imgi_1_avataaars.svg";
import PageTitle from "../../PageTitle/PageTitle";
export default function Home() {
  return (
    <div className="d-flex flex-column align-items-center primary-bg vh-100 justify-content-center">
      <div className="image-cover">
        <img src={avatarImage} alt="Avatar" className="w-100" />;
      </div>
      <PageTitle
        titleColor="text-white"
        pageTitleText="start Framework"
        bgColor="bg-light"
      />
      <p className="mt-4 text-white fs-6">Graphic Artist - Web Designer - Illustrator</p>
    </div>
  );
}
