import { useQuery } from '@tanstack/react-query'
import { useContext } from 'react';
import { AuthContext } from '../../ContextProvider/AuthProvider';

const useCart = email => {
    const { user } = useContext(AuthContext)
    const { refetch, data: cart = [] } = useQuery({
        queryKey: ['carts', user?.email],
        queryFn: async () => {
            const res = await fetch(`https://happy-travel-server-fb3p3su00-mirazahmed0997.vercel.app/bookings?email=${user.email}`)
            return res.json()

        },
    })

    return [cart, refetch]
}

export default useCart;