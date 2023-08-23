import React from "react";
import Layouts from "../../helpers/Layouts";
import MainSection from "./MainSection";

export default function ServiceDetails() {
  return (
    <Layouts
      pageTitle="Online Courses"
      breadcrumbs={[
        { name: "Home", path: "/" },
        { name: "Online Courses", path: "/service-details" },
      ]}
    >
      <MainSection />
    </Layouts>
  );
}
