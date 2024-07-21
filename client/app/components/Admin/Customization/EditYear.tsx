import React, { useState } from "react";
import { updateCourseYear } from "@/redux/features/CourseYears/editYearLogic";
import { toast } from "react-hot-toast";
import { styles } from "@/app/styles/style"; // Assuming styles are exported from a central style file

const EditYear = () => {
  const [year, setYear] = useState("");
  const courseId = "courseId"; // This should be dynamically set

  const updateYear = async () => {
    if (!year) {
      toast.error("Year is required");
      return;
    }
    try {
      await updateCourseYear({ courseId, year: parseInt(year, 10) });
      toast.success("Year updated successfully");
    } catch (error) {
      toast.error("Error updating year");
    }
  };

  return (
    <div className="mt-[120px] text-center">
      <h1 className={`${styles.title}`}>Edit Year</h1>
      <div className="p-3">
        <div className="flex items-center w-full justify-center">
          <input
            className={`${styles.input} !w-[unset] !border-none !text-[20px]`}
            type="text"
            value={year}
            onChange={(e) => setYear(e.target.value)}
            placeholder="Enter year"
          />
        </div>
      </div>
      <div
        className={`${
          styles.button
        } !w-[100px] !min-h-[40px] !h-[40px] dark:text-white text-black bg-[#cccccc34] ${
          year ? "!cursor-pointer !bg-[#42d383]" : "!cursor-not-allowed"
        } !rounded absolute bottom-12 right-12`}
        onClick={year ? updateYear : () => null}
      >
        Save
      </div>
    </div>
  );
};

export default EditYear;
