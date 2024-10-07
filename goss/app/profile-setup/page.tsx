import { populateUser } from "@/app/login/actions";

const ProfileSetup = () => {
  return (
    <div>
      <main className="flex min-h-screen flex-col items-center justify-center bg-gray-50 p-4">
        <div className="w-full max-w-md space-y-8">
          <div>
            <p className="mt-2 text-center text-gray-600">
              Complete your profile
            </p>
          </div>
          <form className="mt-8 space-y-6">
            <div className="space-y-4">
              <div>
                <label
                  htmlFor="profile_img"
                  className="block text-sm font-medium text-gray-700"
                >
                  Profile image
                </label>
                <input
                  id="profile_img"
                  name="profile_img"
                  type="image"
                  className="mt-1 block w-full rounded-md border border-gray-300 px-3 py-2 text-black shadow-sm focus:border-indigo-500 focus:outline-none focus:ring-indigo-500"
                />
              </div>
              <div>
                <label
                  htmlFor="username"
                  className="block text-sm font-medium text-gray-700"
                >
                  Username
                </label>
                <input
                  id="username"
                  name="username"
                  type="text"
                  required
                  className="mt-1 block w-full rounded-md border border-gray-300 px-3 py-2 text-black shadow-sm focus:border-indigo-500 focus:outline-none focus:ring-indigo-500"
                  placeholder="@squirrel69"
                />
              </div>
              <div>
                <label
                  htmlFor="display_name"
                  className="block text-sm font-medium text-gray-700"
                >
                  Display Name
                </label>
                <input
                  id="display_name"
                  name="display_name"
                  type="text"
                  required
                  className="mt-1 block w-full rounded-md border border-gray-300 px-3 py-2 text-black shadow-sm focus:border-indigo-500 focus:outline-none focus:ring-indigo-500"
                  placeholder="fuck squirrels"
                />
              </div>
              <div>
                <label
                  htmlFor="badge"
                  className="block text-sm font-medium text-gray-700"
                >
                  Badge
                </label>
                <input
                  id="badge"
                  name="badge"
                  type="text"
                  className="mt-1 block w-full rounded-md border border-gray-300 px-3 py-2 text-black shadow-sm focus:border-indigo-500 focus:outline-none focus:ring-indigo-500"
                  placeholder="fuck squirrels"
                />
              </div>
              <div>
                <label
                  htmlFor="bio"
                  className="block text-sm font-medium text-gray-700"
                >
                  Bio
                </label>
                <input
                  id="bio"
                  name="bio"
                  type="text"
                  className="mt-1 block w-full rounded-md border border-gray-300 px-3 py-2 text-black shadow-sm focus:border-indigo-500 focus:outline-none focus:ring-indigo-500"
                  placeholder="fuck squirrels"
                />
              </div>
            </div>

            <div>
              <button
                formAction={populateUser}
                className="group relative flex w-full justify-center rounded-md bg-indigo-600 px-3 py-2 text-sm font-semibold text-white hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
              >
                Continue
              </button>
            </div>
          </form>
        </div>
      </main>
    </div>
  );
};

export default ProfileSetup;
