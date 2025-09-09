import { ShieldCheck, Timer, Users, Award } from "lucide-react";

const TrustBadge = () => {
  const badges = [
    {
      icon: <ShieldCheck className="h-6 w-6 text-emerald-400" />,
      title: "Secure & Reliable",
    },
    {
      icon: <Timer className="h-6 w-6 text-indigo-400" />,
      title: "On-Time Delivery",
    },
    {
      icon: <Users className="h-6 w-6 text-pink-400" />,
      title: "Happy Clients",
    },
    {
      icon: <Award className="h-6 w-6 text-amber-400" />,
      title: "Proven Quality",
    },
  ];

  return (
    <section className="relative py-10 bg-black border-t border-slate-800 border-b">
      <div className="max-w-5xl mx-auto px-6">
        <div className="flex flex-wrap justify-center items-center gap-10 md:gap-16">
          {badges.map((badge, i) => (
            <div
              key={i}
              className="flex items-center gap-3 group"
            >
              {badge.icon}
              <span className="text-sm md:text-base font-semibold tracking-wide 
                bg-gradient-to-r from-white via-gray-300 to-gray-400 
                bg-clip-text text-transparent 
                transition-all duration-300 group-hover:from-indigo-400 group-hover:to-purple-400"
              >
                {badge.title}
              </span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default TrustBadge;
