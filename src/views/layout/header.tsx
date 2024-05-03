import { MdEmail } from "react-icons/md";
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar'

const Header = () => {
  return (
    <div className='h-20 border-b'>
        <div className="max-w-5xl mx-auto px-6 flex h-full items-center">
            <div className="w-full flex items-center gap-4 justify-between">
                <h2 className='text-2xl font-bold'>
                    Logo
                </h2>
                <div className='flex items-center gap-6'>
                    <div className='relative'>
                        <MdEmail className='text-4xl' />
                        <div className="absolute top-0 h-3 w-fit left-5 p-2 flex items-center justify-center rounded-full bg-red-500">
                            <span className="animate-ping h-3 w-full p-2 absolute top-0 left-0 inline-flex rounded-full bg-red-400 opacity-75"></span>
                            <span className='text-xs text-white z-20'>500</span>
                        </div>
                    </div>
                    <div className='flex items-center gap-2'>
                        <h4 className='text-lg font-semibold'>
                            John Doe
                        </h4>
                        <Avatar>
                            <AvatarImage src="https://github.com/shadcn.png" />
                            <AvatarFallback>CN</AvatarFallback>
                        </Avatar>
                    </div>
                </div>
            </div>
        </div>
    </div>
  )
}
export default Header