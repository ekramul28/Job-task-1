import { useQuery } from '@tanstack/react-query';
import axios from 'axios';

const useData = ({ name }) => {
    const { refetch, data } = useQuery({
        queryKey: [{ name }],
        queryFn: async () => {
            const res = await axios(`https://job-task-1-server-lovat.vercel.app/${name}`)

            return res.data;
        }

    }

    );
    return { refetch, data }
};

export default useData;