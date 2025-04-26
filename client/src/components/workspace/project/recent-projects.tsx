import { Link } from "react-router-dom";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import useWorkspaceId from "@/hooks/use-workspace-id";

const RecentProjects = () => {
  const workspaceId = useWorkspaceId();

  const projects = [
    {
      emoji: "🚀",
      name: "Space Exploration Initiative",
      date: "April 28, 2025",
      createdBy: "AB",
    },
    {
      emoji: "🛒",
      name: "E-Commerce Platform Revamp",
      date: "April 27, 2025",
      createdBy: "JD",
    },
    {
      emoji: "🌱",
      name: "Sustainability Research",
      date: "April 26, 2025",
      createdBy: "MJ",
    },
    {
      emoji: "📚",
      name: "Educational Content Development",
      date: "April 25, 2025",
      createdBy: "SS",
    },
    {
      emoji: "🏗️",
      name: "Urban Infrastructure Design",
      date: "April 24, 2025",
      createdBy: "RT",
    },
    {
      emoji: "🎨",
      name: "Creative Branding Campaign",
      date: "April 23, 2025",
      createdBy: "KL",
    },
    {
      emoji: "⚙️",
      name: "Automation Workflow Setup",
      date: "April 22, 2025",
      createdBy: "AK",
    },
    {
      emoji: "💼",
      name: "Corporate Strategy Alignment",
      date: "April 21, 2025",
      createdBy: "CN",
    },
    {
      emoji: "🧬",
      name: "Genomics Research Project",
      date: "April 20, 2025",
      createdBy: "LH",
    },
    {
      emoji: "🌍",
      name: "Global Outreach Program",
      date: "April 19, 2025",
      createdBy: "ZW",
    },
  ];

  return (
    <div className="flex flex-col pt-2">
      <ul role="list" className="space-y-2">
        {projects.map((item, index) => (
          <li
            key={index}
            role="listitem"
            className="shadow-none cursor-pointer border-0 py-2 hover:bg-gray-50 transition-colors ease-in-out "
          >
            <Link
              to={`/workspace/${workspaceId}/project/:p383dh`}
              className="grid gap-8 p-0"
            >
              <div className="flex items-start gap-2">
                <div className="text-xl !leading-[1.4rem]">{item.emoji}</div>
                <div className="grid gap-1">
                  <p className="text-sm font-medium leading-none">
                    {item.name}
                  </p>
                  <p className="text-sm text-muted-foreground">{item.date}</p>
                </div>
                <div className="ml-auto flex items-center gap-4">
                  <span className="text-sm text-gray-500">Created by</span>
                  <Avatar className="hidden h-9 w-9 sm:flex">
                    <AvatarImage src="/avatars/01.png" alt="Avatar" />
                    <AvatarFallback>{item.createdBy}</AvatarFallback>
                  </Avatar>
                </div>
              </div>
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default RecentProjects;
