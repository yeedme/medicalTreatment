import React, { useMemo } from "react";
import TopTitle from "../components/TopTitle";
import { ReactComponent as Pediatrics } from "../assets/imgs/department/Pediatrics.svg";
import Card from "../components/Card";

import { ReactComponent as Surgery } from "../assets/imgs/department/Surgery.svg";
import { ReactComponent as InternalMedicine } from "../assets/imgs/department/InternalMedicine.svg";
import { ReactComponent as Pentaphthaliaceae } from "../assets/imgs/department/Pentaphthaliaceae.svg";
import { ReactComponent as Obstetrical } from "../assets/imgs/department/Obstetrical.svg";
import { ReactComponent as Eye } from "../assets/imgs/department/Eye.svg";
import { ReactComponent as DermatologySVG } from "../assets/imgs/department/Dermatology.svg";
import { ReactComponent as NeurologySVG } from "../assets/imgs/department/Neurology.svg";
import { ReactComponent as OncologySVG } from "../assets/imgs/department/Oncology.svg";
import { ReactComponent as PsychologySVG } from "../assets/imgs/department/Psychology.svg";

export default function Doctor() {
  function selectDoctor() {
    const k = ["请选择对应科室", " "];
    return k.map((t, index) => {
      return <h2 key={index}>{t}</h2>;
    });
  }

  const classifyData = useMemo(
    () => [
      {
        title: "儿科",
        component: <Pediatrics />,
      },
      {
        title: "内科",
        component: <InternalMedicine />,
      },
      {
        title: "五官科",
        component: <Pentaphthaliaceae />,
      },
      {
        title: "外科",
        component: <Surgery />,
      },
      {
        title: "产科",
        component: <Obstetrical />,
      },
      {
        title: "眼科",
        component: <Eye />,
      },
      {
        title: "皮肤科",
        component: <DermatologySVG />,
      },
      {
        title: "神经科",
        component: <NeurologySVG />,
      },
      {
        title: "肿瘤科",
        component: <OncologySVG />,
      },
      {
        title: "心理康复科",
        component: <PsychologySVG />,
      },
    ],
    []
  );
  return (
    <>
      <div className="h-screen">
        <TopTitle titleText={selectDoctor()} />
        <div className="mt-8"></div>
        <div className="w-screen grid  gap-y-4 xl:grid-cols-6 grid-cols-4 justify-center items-center ">
          {classifyData.map((t, index) => {
            return (
              <div className="w-full flex justify-center">
                <Card title={t.title} key={index}>
                  {t.component}
                </Card>
              </div>
            );
          })}
          {/* <Card title="儿科">
            <Pediatrics />
          </Card>

          <Card title="内科">
            <InternalMedicine />
          </Card>

          <Card title="五官科">
            <Pentaphthaliaceae />
          </Card>

          <Card title="外科">
            <Surgery />
          </Card>

          <Card title="产科">
            <Obstetrical />
          </Card>

          <Card title="眼科">
            <Eye />
          </Card> */}
        </div>
      </div>
    </>
  );
}
