import { Link } from "react-router";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { PrivateRoutes } from "@/models/routes";

function ServerItem({ id }: { id: string }) {
  return (
    <Link to={`${PrivateRoutes.SHIBICHAT}/${PrivateRoutes.CHAT_SERVER}/${id}`}>
      <Avatar className="h-14 w-14 bg-slate-300  border-none p-[2px] relative my-2 ">
        <AvatarImage
          src="/server.jpg"
          className="w-full object-cover h-full rounded-full"
        />
        <AvatarFallback> ID </AvatarFallback>
      </Avatar>
    </Link>
  );
}
export default ServerItem;
