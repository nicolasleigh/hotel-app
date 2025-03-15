// import Select from "./Select";
import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectLabel,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { useSearchParams } from "react-router-dom";

function SortBy({ options }) {
  const [searchParams, setSearchParams] = useSearchParams();
  const sortBy = searchParams.get("sortBy") || "";

  function handleChange(value) {
    searchParams.set("sortBy", value);
    setSearchParams(searchParams);
  }

  return (
    <Select onValueChange={handleChange} value={sortBy}>
      <SelectTrigger className='w-[180px]'>
        <SelectValue placeholder='Sort by...' />
      </SelectTrigger>
      <SelectContent>
        {options.map((option) => {
          return (
            <SelectItem key={option.value} value={option.value}>
              {option.label}
            </SelectItem>
          );
        })}
      </SelectContent>
    </Select>
  );
}

export default SortBy;
