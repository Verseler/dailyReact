export default function Home() {
  return (
    <div>
      <Header />

      <main class="px-8 bg-gray-50 min-h-screen">
        <p class="py-5 text-xl font-semibold text-center">
          Take IT education experience to the next level.
        </p>

        <div class="flex items-center gap-x-4">
          <div class="avatar">
            <div class="w-10 rounded-full">
              <img src="https://daisyui.com/images/stock/photo-1534528741775-53994a69daeb.jpg" />
            </div>
          </div>

          <button class="flex justify-start flex-1 bg-white shadow-md rounded-3xl btn">
            Create Course...
          </button>
        </div>

        <section class="mt-10">
          <h1 class="text-xl font-bold">Your Courses</h1>
          {/* Cards */}
          <div class="my-5 grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 2xl:grid-cols-6  gap-3">
            <Card />
            <Card />
            <Card />
          </div>
        </section>
      </main>
    </div>
  );
}

function Header() {
  return (
    <header class="flex justify-between h-16 p-2 ">
      <div class="flex gap-x-3 items-center">
        <img
          class="h-full aspect-square"
          src="https://i.pinimg.com/564x/d7/69/46/d76946d2974ec80ac896055e93c181fd.jpg"
        />
        <span class="font-bold">Learnify</span>
      </div>
      <div class="flex gap-x-4 items-center">
        <input
          placeholder="Search Courses"
          class="w-full h-8 max-w-xs rounded-3xl input input-bordered"
          type="text"
        />
        <img
          class="h-full aspect-square"
          src="https://www.iconpacks.net/icons/2/free-user-icon-3296-thumb.png"
        />
      </div>
    </header>
  );
}

function Card() {
  return (
    <div class="shadow-xl card card-compact min-w-56 w-full bg-base-100">
      <div class="card-body">
        {/* Card Header */}
        <div class="flex items-center gap-x-2">
          <div class="avatar">
            <div class="rounded-full w-7">
              <img src="https://daisyui.com/images/stock/photo-1534528741775-53994a69daeb.jpg" />
            </div>
          </div>
          <span class="font-bold text-gray-600">Hazel Mondejar</span>
        </div>

        <figure>
          <img
            class="rounded-md"
            src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTNqQxL7ichoowl6IXPvPQwJoLUYmVYapNt9lh4V7-yauZOpfzimi98ZDxRDnfAl6v378g&usqp=CAU"
            alt="Course card"
          />
        </figure>

        <div class="flex items-center justify-between gap-x-6">
          <span class="font-bold">HTML</span>
          <div class="flex-1">
            <progress class="progress progress-primary" value="40" max="100" />
          </div>
        </div>
        <span class="block text-xs text-gray-500 text-end">0% Complete</span>

        <div class="card-actions">
          <button class="btn btn-sm btn-primary">View Course</button>
        </div>
      </div>
    </div>
  );
}
