import { TeamMember } from "@/content/types";
import { Card } from "@/components/Card";
import { ToastMark } from "@/components/Logo";

export function TeamCard({ member }: { member: TeamMember }) {
  return (
    <Card tone="cream" className="flex flex-col items-center gap-3 text-center">
      <div className="flex h-20 w-20 items-center justify-center rounded-full bg-mustard/20">
        <ToastMark className="h-12 w-12" />
      </div>
      <h3 className="font-display text-lg font-bold text-toast-dark">{member.name}</h3>
      <p className="font-display text-sm font-semibold text-coral">{member.role}</p>
      <p className="text-sm text-toast-dark/70">{member.bio}</p>
      {member.status === "in-conversation" && (
        <span className="rounded-full bg-teal/15 px-3 py-1 text-xs font-semibold text-teal">
          In conversation — not yet confirmed
        </span>
      )}
    </Card>
  );
}
