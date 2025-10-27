import "./App.css";

// YT: 45:36

function App() {
  return (
    <>
      <div className="bg-teal-100 min-h-screen">
        <div className="flex justify-between bg-teal-500 mb-8 px-6 py-4 text-teal-100">
          <h1 className="font-bold text-lg">MyWebsite</h1>
          <nav className="flex gap-4">
            <a href="#">Home</a>
            <a href="#">Blog</a>
            <a href="#">Contact</a>
          </nav>
        </div>
        <div>
          <section className="text-center">
            <h2 className="mb-4 font-semibold sm:text-amber-500 text-xl">
              Welcome
            </h2>
            <p>This is the main content area of the website.</p>
          </section>
          <section>
            <h2 className="mb-4 font-semibold text-xl text-center">Features</h2>
            <div className="gap-6 grid sm:grid-cols-2 md:grid-cols-3">
              <div className="bg-teal-400 p-4">Feature 1</div>
              <div className="bg-teal-400 p-4">Feature 2</div>
              <div className="bg-teal-400 p-4">Feature 3</div>
              <div className="bg-teal-400 p-4">Feature 1</div>
              <div className="bg-teal-400 p-4">Feature 2</div>
              <div className="bg-teal-400 p-4">Feature 3</div>
              <div className="bg-teal-400 p-4">Feature 1</div>
              <div className="bg-teal-400 p-4">Feature 2</div>
              <div className="bg-teal-400 p-4">Feature 3</div>
            </div>
          </section>
        </div>
        <div> Footer </div>
      </div>
    </>
  );
}

export default App;
