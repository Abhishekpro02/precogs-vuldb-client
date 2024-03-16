import { Link } from "react-router-dom";

const Home = () => {
  return (
    <div className="bg-white min-h-screen">
      <div className="mx-auto max-w-7xl p-4 bg-white rounded-lg shadow-lg">
        {/* <h1 className="text-3xl font-bold text-gray-800 mb-4">
          Vulnerability Scanner
        </h1> */}
        <h1 className="text-3xl font-bold mb-4">
          <span className="text-blue-500">V</span>
          <span className="text-green-500">u</span>
          <span className="text-yellow-500">l</span>
          <span className="text-red-500">n</span>
          <span className="text-purple-500">e</span>
          <span className="text-blue-500">r</span>
          <span className="text-green-500">a</span>
          <span className="text-yellow-500">b</span>
          <span className="text-red-500">i</span>
          <span className="text-purple-500">l</span>
          <span className="text-blue-500">i</span>
          <span className="text-green-500">t</span>
          <span className="text-yellow-500">y</span>
          <span className="text-red-500"> </span>
          <span className="text-purple-500">S</span>
          <span className="text-blue-500">c</span>
          <span className="text-green-500">a</span>
          <span className="text-yellow-500">n</span>
          <span className="text-red-500">n</span>
          <span className="text-purple-500">e</span>
          <span className="text-blue-500">r</span>
        </h1>
        <p className="text-lg text-gray-600 mb-8">
          Stay informed about the latest vulnerabilities in your system.
        </p>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          <div className="bg-white rounded-lg shadow-md p-6">
            <h2 className="text-xl font-semibold mb-2">
              Total Vulnerabilities
            </h2>
            <p className="text-3xl font-bold text-blue-600">123</p>
          </div>
          <div className="bg-white rounded-lg shadow-md p-6">
            <h2 className="text-xl font-semibold mb-2">Commits</h2>
            <p className="text-3xl font-bold text-yellow-600">20</p>
          </div>
          <div className="bg-white rounded-lg shadow-md p-6">
            <h2 className="text-xl font-semibold mb-2">Sources</h2>
            <p className="text-3xl font-bold text-green-600">2</p>
          </div>
        </div>
        <div className="mt-8 text-center">
          <Link
            to="/vulnerablity"
            className="bg-blue-500 text-white py-2 px-4 rounded-lg shadow-md hover:bg-blue-600"
          >
            View All Vulnerabilities
          </Link>
        </div>
        <hr className="my-8 border-gray-300" />
        <h2 className="text-2xl font-bold text-pink-600 mb-4">
          Understanding Vulnerabilities
        </h2>
        <p className="text-lg text-gray-600 mb-8">
          Vulnerabilities are weaknesses or flaws in software systems that can
          be exploited by attackers to compromise the security of a system.
          Understanding different types of vulnerabilities is crucial for
          securing your applications and data.
        </p>
        <h3 className="text-xl font-bold text-pink-600 mb-2">
          Common Types of Vulnerabilities:
        </h3>
        <ul className="list-disc list-inside text-lg text-gray-600">
          <li>SQL Injection (SQLi)</li>
          <li>Cross-Site Scripting (XSS)</li>
          <li>Cross-Site Request Forgery (CSRF)</li>
          <li>Remote Code Execution (RCE)</li>
          <li>Security Misconfiguration</li>
          <li>Sensitive Data Exposure</li>
          <li>Broken Authentication</li>
          <li>XML External Entity (XXE)</li>
          <li>Clickjacking</li>
          <li>Directory Traversal</li>
        </ul>
      </div>
    </div>
  );
};

export default Home;
