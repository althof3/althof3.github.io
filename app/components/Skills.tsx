import { Server, Layout, Database, Cloud, ShieldCheck, Blocks } from "lucide-react";

const groups = [
  {
    label: "Backend",
    icon: <Server size={20} className="text-violet-400" />,
    items: ["Golang", "Node.js", "Java", "NestJS", "Express.js", "GraphQL", "gRPC"],
  },
  {
    label: "Frontend",
    icon: <Layout size={20} className="text-sky-400" />,
    items: ["React.js", "Next.js", "TypeScript", "Redux", "Tailwind CSS"],
  },
  {
    label: "Database",
    icon: <Database size={20} className="text-emerald-400" />,
    items: ["PostgreSQL", "MySQL", "MongoDB", "Redis", "Elasticsearch", "Solr"],
  },
  {
    label: "Infrastructure",
    icon: <Cloud size={20} className="text-amber-400" />,
    items: ["Docker", "Nginx", "Linux", "Kafka", "RabbitMQ", "AWS S3", "CI/CD"],
  },
  {
    label: "Security",
    icon: <ShieldCheck size={20} className="text-rose-400" />,
    items: ["OAuth2", "JWT", "HSTS", "CORS", "Single-Flight Token"],
  },
  {
    label: "Blockchain",
    icon: <Blocks size={20} className="text-blue-400" />,
    items: ["Solana", "Web3.js", "Smart Contracts"],
  },
];

export default function Skills() {
  return (
    <section className="py-24 !px-6 relative" id="about">
      <div className="max-w-5xl mx-auto">
        <div className="mb-14">
          <h2 className="text-3xl font-bold text-zinc-100 tracking-tight mb-3">
            Core Technologies
          </h2>
          <p className="text-zinc-400 text-base max-w-lg">
            Building robust architectures across the stack. From high‑throughput Go services to dynamic React UIs and Kafka pipelines.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {groups.map((g) => (
            <div key={g.label} className="rounded-2xl border border-zinc-800 bg-zinc-900/30 p-6 flex flex-col hover:border-zinc-700 transition-colors">
              <div className="flex items-center gap-3 mb-5">
                <div className="p-2 rounded-lg bg-zinc-800/50 border border-zinc-800">
                  {g.icon}
                </div>
                <h3 className="text-sm font-semibold text-zinc-200">{g.label}</h3>
              </div>
              
              <div className="flex flex-wrap gap-2">
                {g.items.map((item) => (
                  <span key={item} className="text-xs font-medium px-2.5 py-1 rounded-md border border-zinc-800 bg-zinc-950 text-zinc-400">
                    {item}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
