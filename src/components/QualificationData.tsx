import { Calendar, CalendarBlank, CalendarPlus, CalendarX } from "phosphor-react";

type QualificationDataProps = {
  title: string;
  subtitle: string;
  period: string;
  div?: boolean;
}

const QualificationData = (props: QualificationDataProps) => {
  return (
    <div className="col-span-4">
      <h3 className="qualification__title text-gray-800 font font-semibold">{props.title}</h3>
      <span className="qualification__subtitle inline-block text-sm text-gray-500 font-semibold">{props.subtitle}</span>
      <div className="qualification__calendar flex items-center mb-4 gap-1 text-sm text-gray-500">
        <CalendarX /> {props.period}
      </div>
    </div>
  )

}

export default QualificationData;