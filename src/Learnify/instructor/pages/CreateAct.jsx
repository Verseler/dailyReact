export default function CreateAct() {
  return (
    <div class="py-10">
      <form class="space-y-4 max-w-xl m-auto">
        <h1 class="font-bold text-4xl">Create Activity</h1>

        <label class="form-control w-full">
          <div class="label">
            <span class="label-text">Activity Name</span>
          </div>
          <input
            type="text"
            placeholder="Enter Activity Name"
            class="input  input-bordered w-full"
          />
        </label>

        <label class="form-control w-full">
          <div class="label">
            <span class="label-text">Activity #</span>
          </div>
          <input
            type="number"
            placeholder="Enter Activity Number"
            class="input  input-bordered w-full"
          />
        </label>

        <label class="form-control w-full">
          <div class="label">
            <span class="label-text">Activity Description</span>
          </div>
          <input
            type="text"
            placeholder="Enter Activity Description"
            class="input  input-bordered w-full"
          />
        </label>

        <div class="bg-indigo-50 pt-2 pb-6 px-6 rounded-xl">
          <label class="form-control w-full mb-4">
            <div class="label">
              <span class="label-text font-bold">Number of Items</span>
            </div>
            <input
              type="number"
              placeholder="Enter Number of Items"
              class="input  input-bordered"
            />
          </label>

          <div class="form-control w-full">
            <div class="label">
              <span class="label-text">Question #1</span>
            </div>
            <select class="select select-primary w-full">
              <option disabled selected>
              What does HTML stand for?
              </option>
              <option>A. Hyper Text Markup Language</option>
              <option>B. Hyperlink and Text Markup Language</option>
              <option>C. High-Level Text Management Language</option>
              <option>D. Hyperlink Text Management Language</option>
            </select>
          </div>

          <div class="form-control w-full">
            <div class="label">
              <span class="label-text">Question #2</span>
            </div>
            <select class="select select-primary w-full">
              <option disabled selected>
              Which tag is used to define a hyperlink in HTML?
              </option>
              <option>A. link</option>
              <option>B. a</option>
              <option>C. hyperlink</option>
              <option>D. url</option>
            </select>
          </div>

          <div class="form-control w-full">
            <div class="label">
              <span class="label-text">Question #2</span>
            </div>
            <select class="select select-primary w-full">
              <option disabled selected>
              Which tag is used to define a hyperlink in HTML?
              </option>
              <option>A. link</option>
              <option>B. a</option>
              <option>C. hyperlink</option>
              <option>D. url</option>
            </select>
          </div>
        </div>

        <div class="flex justify-between pt-10 pb-5">
          <button class="btn btn-outline btn-wide btn-primary">Cancel</button>
          <button class="btn btn-wide btn-primary">Post Activity</button>
        </div>
      </form>
    </div>
  );
}
