export default function CreateCourseCont() {
  return (
    <div class="p-5">
      <main class="w-full xl:max-w-5xl xl:m-auto">
        <div class="flex items-center justify-between gap-x-6">
          <h1 class="font-bold text-3xl">HTML Course</h1>
          <div class="flex-1">
            <progress class="progress progress-primary" value="40" max="100" />
          </div>
        </div>
        <span class="block text-xs text-gray-500 text-end">0% Complete</span>
        <p>
          Course Description: Lorem ipsum dolor sit amet consectetur adipisicing
          elit. Voluptates voluptatibus ipsa similique fugiat totam! Totam
          aliquid fugiat, quam consequatur libero veniam distinctio provident
          doloribus modi pariatur! Harum nam suscipit voluptates. Esse magni
          magnam aut quia, ad quas beatae consectetur deleniti suscipit ipsam
          velit quis eligendi perspiciatis molestias iste minus, fugit explicabo
          consequatur nisi dignissimos quisquam eveniet unde quaerat. Eum, unde!
          .
        </p>

        <div class="flex items-center gap-x-4 my-8">
          <div class="avatar">
            <div class="w-10 rounded-full">
              <img src="https://daisyui.com/images/stock/photo-1534528741775-53994a69daeb.jpg" />
            </div>
          </div>

          <input
            placeholder="Create Course..."
            class="flex-1 bg-white shadow-lg input border border-gray-100 rounded-3xl"
          />

          <button class="btn rounded-3xl px-8 bg-white shadow-md">
            + Upload
          </button>
        </div>

        <div class="text-centerw-full text-center p-6 my-20 border-4 border-violet-600 rounded-xl">
          <span class="block font-bold text-2xl">Student Enrolled</span>
          <span class="block font-bold text-xl text-violet-600">101</span>
        </div>

        <section>
          <h2 class="font-bold text-2xl">Learning Materials</h2>
          {/* Video materials */}
          <div class="my-5 grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 2xl:grid-cols-6  gap-3">
            <VideoCard />
          </div>

          {/* Text materials */}
          <div class="space-y-2">
            <TextCard />
            <TextCard />
            <TextCard />
          </div>
        </section>

        <section class="mt-28">
          <div class="flex justify-between mb-8">
            <h2 class="font-bold text-2xl">Learning Materials</h2>
            <button class="btn btn-primary font-bold">CREATE ACTIVITY +</button>
          </div>
          <div class="space-y-2">
            <QuizCard />
            <QuizCard />
            <QuizCard />
          </div>
        </section>
      </main>
    </div>
  );
}

function QuizCard() {
  return (
    <div class="card card-side p-2 max-h-16 gap-x-5 flex  bg-base-100 card-bordered shadow-sm">
      <figure>
        <img
          class="h-14 aspect-square"
          src="https://cdn-icons-png.flaticon.com/512/179/179483.png"
          alt="Pdf"
        />
      </figure>
      <span class="card-title flex-1">QUIZ 2: TEST YOUR MARKUP KNOWLEDGE </span>
    </div>
  );
}

function TextCard() {
  return (
    <div class="card card-side p-2 max-h-16 gap-x-5 flex  bg-base-100 card-bordered shadow-sm">
      <figure>
        <img
          class="h-14 aspect-square"
          src="https://cdn-icons-png.flaticon.com/512/179/179483.png"
          alt="Pdf"
        />
      </figure>
      <span class="card-title flex-1">HTML Accessibility: Designing web pages to be accessible to users with disabilities.</span>

      <div class="card-actions dropdown">
        <div tabindex="0" role="button" class="px-2 m-1 font-extrabold">
          ⋮
        </div>
        <ul
          tabindex="0"
          class="dropdown-content z-[1] menu p-2 shadow bg-base-100 rounded-box w-52"
        >
          <li>
            <a>Rename</a>
          </li>
          <li>
            <a>Edit</a>
          </li>
        </ul>
      </div>
    </div>
  );
}

function VideoCard() {
  return (
    <div class="shadow-md card card-compact min-w-56 w-full bg-base-100">
      {/* Card Header */}
      <div class="card-actions dropdown  ml-auto">
        <div tabindex="0" role="button" class="px-2 m-1 font-extrabold">
          ⋮
        </div>
        <ul
          tabindex="0"
          class="dropdown-content z-[1] menu p-2 shadow bg-base-100 rounded-box w-52"
        >
          <li>
            <a>Rename</a>
          </li>
          <li>
            <a>Edit</a>
          </li>
        </ul>
      </div>
      <div class="card-body">
        <figure>
          <img
            class="rounded-md"
            src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTNqQxL7ichoowl6IXPvPQwJoLUYmVYapNt9lh4V7-yauZOpfzimi98ZDxRDnfAl6v378g&usqp=CAU"
            alt="Course card"
          />
        </figure>

        <span class="font-medium text-sm pt-4">1. Introduction to HTML</span>
      </div>
    </div>
  );
}
