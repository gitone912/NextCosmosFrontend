import React from "react";
import Layouts from "../../helpers/Layouts/index";
import MainSection from "./MainSection";

export default function ProtfolioDetails() {
  return (
    <Layouts
      pageTitle="Training"
      breadcrumbs={[
        { name: "home", path: "/" },
        { name: "Industrial Training", path: "/portfolio-details" },
      ]}
    >
      <MainSection />
    </Layouts>
  );
}
