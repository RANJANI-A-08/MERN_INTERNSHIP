import React from "react";
import {
  LayoutDashboard,
  FolderKanban,
  ClipboardList,
  Users,
  FileText,
  Settings,
  Search,
  Download,
  Share2,
  Clock,
  CheckCircle,
  ListTodo,
  Menu,
  Mic,
  Database,
  Image,
  Brain,
} from "lucide-react";

const stats = [
  {
    title: "Total Projects",
    value: "24",
    icon: FolderKanban,
    color: "text-purple-600",
    bg: "bg-purple-100",
  },
  {
    title: "Total Tasks",
    value: "1,248",
    icon: ListTodo,
    color: "text-blue-600",
    bg: "bg-blue-100",
  },
  {
    title: "Active Members",
    value: "18",
    icon: Users,
    color: "text-green-600",
    bg: "bg-green-100",
  },
  {
    title: "Pending Tasks",
    value: "96",
    icon: Clock,
    color: "text-orange-600",
    bg: "bg-orange-100",
  },
];

const tasks = [
  ["Review AI annotations", "Image Labeling", "RK", "Completed"],
  ["Validate dataset", "Speech to Text", "SP", "In Progress"],
  ["Update evaluation script", "Model QA", "AK", "Pending"],
  ["Prepare QBR report", "DC Reporting", "MK", "In Progress"],
  ["Sync tag DB to datalake", "Data Pipeline", "NK", "Pending"],
];

const projects = [
  ["Image Labeling", "6 members", "Active", Image],
  ["Speech to Text", "4 members", "Active", Mic],
  ["Model QA", "5 members", "On Hold", Brain],
  ["DC Reporting", "3 members", "Active", Database],
  ["Data Pipeline", "4 members", "Active", FolderKanban],
];

function App() {
  return (
    <div className="min-h-screen bg-gray-50 flex">

      {/* Sidebar */}
      <aside className="w-64 bg-[#17233f] text-white min-h-screen p-5">

        <h1 className="text-2xl font-bold mb-10 flex items-center gap-2">
          <span className="text-purple-400">〽</span>
          PulseWorks AI
        </h1>

        <nav className="space-y-3">

          {[
            [LayoutDashboard, "Dashboard"],
            [FolderKanban, "Projects"],
            [ClipboardList, "Tasks"],
            [Users, "Team"],
            [FileText, "Reports"],
            [Settings, "Settings"],
          ].map(([Icon, name], index) => (

            <div
              key={name}
              className={`flex items-center gap-3 p-3 rounded-lg cursor-pointer transition ${
                index === 0
                  ? "bg-purple-600"
                  : "hover:bg-slate-700"
              }`}
            >
              <Icon size={20} />
              <span>{name}</span>
            </div>

          ))}

        </nav>
      </aside>

      {/* Main Content */}
      <main className="flex-1 p-8">

        {/* Top Bar */}
        <div className="flex justify-between items-center mb-10">

          <div className="relative w-80">
            <Search
              className="absolute left-3 top-3 text-gray-400"
              size={18}
            />

            <input
              type="text"
              placeholder="Search projects, tasks, or team..."
              className="w-full pl-10 pr-4 py-3 border border-gray-200 rounded-lg outline-none focus:ring-2 focus:ring-purple-400"
            />
          </div>

          <div className="flex items-center gap-5">
            <span className="text-gray-500">Nov 25, 2026</span>
            <div className="w-10 h-10 rounded-full bg-purple-200 flex items-center justify-center font-bold text-purple-700">
              KR
            </div>
          </div>

        </div>

        {/* Welcome */}
        <div className="mb-8">
          <h2 className="text-3xl font-bold text-gray-800">
           Welcome back, RANJANI 👋
          </h2>

          <p className="text-gray-500 mt-2">
            Here's what's happening at PulseWorks AI today.
          </p>
        </div>

        {/* Statistics Cards */}
        <div className="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-4 gap-5 mb-8">

          {stats.map((item) => {
            const Icon = item.icon;

            return (
              <div
                key={item.title}
                className="bg-white p-6 rounded-xl shadow-sm border border-gray-100 flex items-center gap-5"
              >
                <div className={`${item.bg} ${item.color} p-4 rounded-xl`}>
                  <Icon size={27} />
                </div>

                <div>
                  <p className="text-gray-500 text-sm">
                    {item.title}
                  </p>

                  <h3 className="text-2xl font-bold text-gray-800">
                    {item.value}
                  </h3>
                </div>
              </div>
            );
          })}

        </div>

        {/* Dashboard Sections */}
        <div className="grid grid-cols-1 xl:grid-cols-3 gap-6">

          {/* Recent Tasks */}
          <div className="xl:col-span-2 bg-white rounded-xl shadow-sm border border-gray-100 p-6">

            <div className="flex justify-between items-center mb-6">
              <h3 className="text-xl font-bold text-gray-800">
                Recent Tasks
              </h3>

              <button className="text-purple-600 text-sm font-semibold hover:underline">
                View All →
              </button>
            </div>

            <div className="overflow-x-auto">

              <table className="w-full text-left">

                <thead>
                  <tr className="text-gray-500 text-sm border-b">
                    <th className="pb-4">Task</th>
                    <th className="pb-4">Project</th>
                    <th className="pb-4">Assignee</th>
                    <th className="pb-4">Status</th>
                  </tr>
                </thead>

                <tbody>
                  {tasks.map((task, index) => (

                    <tr
                      key={index}
                      className="border-b last:border-0 hover:bg-gray-50"
                    >
                      <td className="py-5 text-sm font-medium text-gray-700">
                        <div className="flex items-center gap-2">
                          <input type="checkbox" />
                          {task[0]}
                        </div>
                      </td>

                      <td className="py-5 text-sm text-gray-500">
                        {task[1]}
                      </td>

                      <td className="py-5 text-sm text-gray-600">
                        {task[2]}
                      </td>

                      <td className="py-5">
                        <span
                          className={`px-3 py-1 rounded-full text-xs font-semibold ${
                            task[3] === "Completed"
                              ? "bg-green-100 text-green-600"
                              : task[3] === "In Progress"
                              ? "bg-blue-100 text-blue-600"
                              : "bg-yellow-100 text-yellow-700"
                          }`}
                        >
                          {task[3]}
                        </span>
                      </td>
                    </tr>

                  ))}
                </tbody>

              </table>
            </div>
          </div>

          {/* Active Projects */}
          <div className="bg-white rounded-xl shadow-sm border border-gray-100 p-6">

            <div className="flex justify-between items-center mb-6">
              <h3 className="text-xl font-bold text-gray-800">
                Active Projects
              </h3>

              <button className="text-purple-600 text-sm font-semibold hover:underline">
                View All →
              </button>
            </div>

            <div className="space-y-6">

              {projects.map(([name, members, status, Icon]) => (

                <div
                  key={name}
                  className="flex items-center justify-between"
                >

                  <div className="flex items-center gap-3">

                    <div className="bg-purple-100 text-purple-600 p-3 rounded-lg">
                      <Icon size={20} />
                    </div>

                    <div>
                      <h4 className="font-semibold text-gray-800 text-sm">
                        {name}
                      </h4>

                      <p className="text-xs text-gray-500 mt-1">
                        {members}
                      </p>
                    </div>

                  </div>

                  <span
                    className={`text-xs font-semibold px-3 py-1 rounded-full ${
                      status === "Active"
                        ? "bg-green-100 text-green-600"
                        : "bg-orange-100 text-orange-600"
                    }`}
                  >
                    {status}
                  </span>

                </div>

              ))}

            </div>
          </div>

        </div>

      </main>
    </div>
  );
}

export default App;