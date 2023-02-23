import { Outlet, useParams, useSearchParams } from "react-router-dom";

export default function Posts() {
  const { id } = useParams();
  const [qs] = useSearchParams();

  return (
    <div>
      <h1>Post {`Param: ${id} QS: ${qs.get('valor')}`}</h1>
      <Outlet />
    </div>
  );
}