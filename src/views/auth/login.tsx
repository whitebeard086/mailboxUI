import { z } from 'zod';
import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import {
    Form,
    FormControl,
    FormField,
    FormItem,
    FormLabel,
    FormMessage,
} from '@/components/ui/form';
import { Input } from '@/components/ui/input';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader } from '@/components/ui/card';

const formSchema = z.object({
    email: z.string({ message: 'Please enter your email address' }).email({ message: 'Invalid email address' }),
    password: z
        .string()
        .min(8, { message: 'Password must be at least 8 characters' }),
});

const Login = () => {
    const form = useForm<z.infer<typeof formSchema>>({
        resolver: zodResolver(formSchema),
        defaultValues: {
            email: 'john@example.com',
            password: 'password',
        },
    });

    const submitForm = (values: z.infer<typeof formSchema>) => {
        console.log(values);
    };

    return (
        <div className='max-w-md mx-auto p-6 min-h-svh flex items-center'>
            <Card className='w-full'>
                <CardHeader>
                    <img
                        src="/login.svg"
                        alt="Secure Login"
                        // className="h-16 w-16 object-contain"
                    />
                </CardHeader>
                <CardContent>
                    <Form {...form}>
                        <form
                            onSubmit={form.handleSubmit(submitForm)}
                            className='space-y-8'
                        >
                            <FormField
                                control={form.control}
                                name='email'
                                render={({ field, fieldState: { error } }) => (
                                    <FormItem>
                                        <FormLabel>Email</FormLabel>
                                        <FormControl>
                                            <Input
                                                type='email'
                                                placeholder='Email Address'
                                                {...field}
                                                />
                                        </FormControl>
                                        {error ? (<FormMessage>{error.message}</FormMessage>) : null}
                                    </FormItem>
                                )}
                            />

                            <FormField
                                control={form.control}
                                name="password"
                                render={({ field, fieldState: { error } }) => (
                                    <FormItem>
                                        <FormLabel>Password</FormLabel>
                                        <FormControl>
                                            <Input type="password" className="h-9" {...field} />
                                        </FormControl>
                                        {error ? <FormMessage>{error.message}</FormMessage> : null}
                                    </FormItem>
                                )}
                            />
                            <div className='flex justify-center'>
                                <Button variant={'primary'} type='submit'>Login</Button>
                            </div>
                        </form>
                    </Form>
                </CardContent>
            </Card>
        </div>
    );
};
export default Login;
