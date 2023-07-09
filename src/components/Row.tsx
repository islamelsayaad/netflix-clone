import { Movie } from "../../typing";
import Card from "./Card";

interface Props {
  data: Movie[];
  title: string;
}

function Row({ data, title }: Props) {
  return (
    <div className="flex flex-col gap-y-2 ">
      <div className="px-14">
        <h3 className="text-[#e5e5e5] font-medium text-lg">{title}</h3>
      </div>
      <div className="c-row__container flex flex-row flex-nowrap gap-x-1.5 w-auto overflow-x-scroll overflow-y-hidden px-14">
        {data.map((item) => (
          <Card key={item.id} data={item} />
        ))}
      </div>
    </div>
  );
}

export default Row;
