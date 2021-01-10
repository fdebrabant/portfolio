import React from "react";
import cv from "../assets/img/CV.pdf";
import { Icon } from "@iconify/react";
import fileDownload from "@iconify/icons-fa-solid/file-download";
import "../css/icons.css";

export default function BoutonDl() {
  return (
    <div className='iconContainerOneItem'>
      <div>
        <a href={cv} download="CV">
          <Icon className="socialLink" icon={fileDownload} />
          <div className="iconText">Télécharger CV</div>
        </a>
      </div>
    </div>
  );
}
