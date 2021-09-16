/* eslint-disable react/prop-types */
import RequestReset from '../components/RequestReset';
import Reset from '../components/Reset';

export default function ResetPage({ query }) {
  console.log(query);
  if (!query?.token) {
    return (
      <div>
        <p>Sorry, you must provide a token</p>
        <RequestReset />
      </div>
    );
  }
  return (
    <>
      <p>RESET YOUR PASSWORD {query.token}</p>
      <Reset token={query.token} />
    </>
  );
}
