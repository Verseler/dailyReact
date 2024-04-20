export default function CreateCourse() {
  return (
    <div class="py-10">
      <form class="space-y-4 max-w-xl m-auto">
        <h1 class="font-bold text-4xl">Create Course</h1>

        <label class="form-control w-full">
          <div class="label">
            <span class="label-text">Course Name</span>
          </div>
          <input
            type="text"
            placeholder="Enter Course Name"
            class="input  input-bordered w-full"
          />
        </label>

        <label class="form-control w-full">
          <div class="label">
            <span class="label-text">Course Description</span>
          </div>
          <input
            type="text"
            placeholder="Enter Course Description"
            class="input  input-bordered w-full"
          />
        </label>

        <label class="form-control w-full">
          <div class="label">
            <span class="label-text">Course Objectives</span>
          </div>
          <input
            type="text"
            placeholder="Enter Course Objectives"
            class="input  input-bordered w-full"
          />
        </label>

        <label class="form-control w-full">
          <div class="label">
            <span class="label-text">Course Topics</span>
          </div>
          <input
            type="text"
            placeholder="Enter Course Description"
            class="input  input-bordered w-full"
          />
        </label>

        <div class="flex form-control items-center justify-center w-full">
          <div class="label mr-auto">
            <span class="label-text">Upload Learning Materials </span>
          </div>
          <label
            for="dropzone-file"
            class="flex flex-col items-center justify-center w-full h-64 border-2 border-gray-300 border-dashed rounded-lg cursor-pointer bg-gray-50 dark:hover:bg-bray-800 dark:bg-gray-700 hover:bg-gray-100 dark:border-gray-600 dark:hover:border-gray-500 dark:hover:bg-gray-600"
          >
            <div class="flex flex-col items-center justify-center pt-5 pb-6">
              <svg
                class="w-8 h-8 mb-4 text-gray-500 dark:text-gray-400"
                aria-hidden="true"
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 20 16"
              >
                <path
                  stroke="currentColor"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  stroke-width="2"
                  d="M13 13h3a3 3 0 0 0 0-6h-.025A5.56 5.56 0 0 0 16 6.5 5.5 5.5 0 0 0 5.207 5.021C5.137 5.017 5.071 5 5 5a4 4 0 0 0 0 8h2.167M10 15V6m0 0L8 8m2-2 2 2"
                />
              </svg>
              <p class="mb-2 text-sm text-gray-500 dark:text-gray-400">
                <span class="font-semibold">Click to upload</span> or drag and
                drop
              </p>
              <p class="text-xs text-gray-500 dark:text-gray-400">
                SVG, PNG, JPG or GIF (MAX. 800x400px)
              </p>
            </div>
            <input id="dropzone-file" type="file" class="hidden" />
          </label>
        </div>

        <div class="flex justify-between pt-10 pb-5">
          <button class="btn btn-outline btn-wide btn-primary">Cancel</button>
          <button class="btn btn-wide btn-primary">Next</button>
        </div>
      </form>
    </div>
  );
}