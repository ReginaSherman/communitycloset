import { signIn, signOut, useSession } from 'next-auth/react'
import { Button } from '@chakra-ui/react';
import { useQuery } from 'react-query'
import ClothingItems from '../components/ClothingItems'


export default function Dashboard() {
  const { data: session, status } = useSession()
  const loading = status === 'loading'

  // const [data, setData] = useState();
  // const [isLoading, setIsLoading] = useState(false);
  // const [isError, setIsError] = useState(false);
  // const [error, setError] = useState();

  // useEffect(() => {
  //   const fetchData = async () => {
  //     setIsLoading(true);

  //     fetch('/api/items')
  //       .then((response) => response.json())
  //       .then((data) => {
  //         setData(data);
  //         setIsLoading(false);
  //       })
  //       .catch((error) => {
  //         setIsError(true);
  //         setError(error);
  //         setIsLoading(false);
  //       });
  //   };

  //   fetchData();
  // }, []);

  const onPost = async () => {
    try {
      await fetch('/api/clothing-item', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify({
          name: 'test3',
          image: 'https://www.biography.com/.image/ar_1:1%2Cc_fill%2Ccs_srgb%2Cfl_progressive%2Cq_auto:good%2Cw_1200/MTU0OTkwNDUxOTQ5MDUzNDQ3/kanye-west-attends-the-christian-dior-show-as-part-of-the-paris-fashion-week-womenswear-fall-winter-2015-2016-on-march-6-2015-in-paris-france-photo-by-dominique-charriau-wireimage-square.jpg'
        })
      })
    } catch (e) {
      console.error(e)
    }
  }

  const onGet = async () => {
    try {
      // test id
      const id = 'cl0mpc8m20010rvuugppte7qt'
      const response = await fetch(`/api/clothing-item/${id}`)
      const item = await response.json()
      console.log(item)
    } catch (e) {
      console.error(e)
    }
  }
  return (
    <div className='container'>
      {!session && (
        <>
          Not signed in <br />
          <button onClick={signIn}>Sign In</button>
        </>
      )}
      {
        session && (
          <>
            Signed in as {session.user.email} <br />
            <Button onClick={signIn}>Sign In</Button>
            <Button onClick={signOut}>Sign Out</Button>
            <Button onClick={onPost}>Test POST</Button>
            <Button onClick={onGet}>Test GET</Button>
            <ClothingItems />
          </>
        )
      }

    </div>
  )
}


