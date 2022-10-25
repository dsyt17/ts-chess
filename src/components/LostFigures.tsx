import React, { FC, useState, useEffect } from "react";
import { Figure } from "../models/figures/Figure";

interface LostFiguresProps {
  title: string;
  figures: Figure[];
}

const LostFigures: FC<LostFiguresProps> = ({ title, figures }) => {
  return (
    <div className="lost">
      <h3>{title}</h3>
      {figures.map((f) => (
        <div key={f.id}>
          {f.name}{" "}
          {f.logo && <img width={20} height={20} src={f.logo} alt={f.name} />}
        </div>
      ))}
    </div>
  );
};

export default LostFigures;
