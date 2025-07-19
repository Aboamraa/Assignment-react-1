import PageTitle from "../../PageTitle/PageTitle";

export default function Contact() {
  return (
    <>
      <div className=" d-flex flex-column align-items-center  mt-4">
        <PageTitle
          titleColor={"secondary-color"}
          pageTitleText={"contact section"}
          bgColor={"secondary-bg"}
        />
      </div>
      <div className="container w-50 d-flex flex-column py-5">
        <input
          type="text"
          placeholder="Username"
          name="username"
          className="mb-4 main-input pb-2"
        />
        <input
          type="number"
          placeholder="User age"
          name="userAge"
          className="mb-4 main-input pb-2"
        />
        <input
          type="email"
          placeholder="User Email"
          name="userEmail"
          className="mb-4 main-input pb-2"
        />
        <input
          type="password"
          placeholder="User Password"
          name="userPassword"
          className="mb-4 main-input pb-2"
        />
        <input type="submit" value="Send Message" className="p-2 rounded-3 text-capitalize text-white" />
      </div>
    </>
  );
}
