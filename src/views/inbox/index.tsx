import { Button } from '@/components/ui/button';
import { Table, TableBody, TableCaption, TableCell, TableFooter, TableHead, TableHeader, TableRow } from '@/components/ui/table';

const Inbox = () => {
    const invoices = [
        {
            invoice: 'INV001',
            paymentStatus: 'Paid',
            totalAmount: '$250.00',
            paymentMethod: 'Credit Card',
        },
        {
            invoice: 'INV002',
            paymentStatus: 'Pending',
            totalAmount: '$150.00',
            paymentMethod: 'PayPal',
        },
        {
            invoice: 'INV003',
            paymentStatus: 'Unpaid',
            totalAmount: '$350.00',
            paymentMethod: 'Bank Transfer',
        },
        {
            invoice: 'INV004',
            paymentStatus: 'Paid',
            totalAmount: '$450.00',
            paymentMethod: 'Credit Card',
        },
        {
            invoice: 'INV005',
            paymentStatus: 'Paid',
            totalAmount: '$550.00',
            paymentMethod: 'PayPal',
        },
        {
            invoice: 'INV006',
            paymentStatus: 'Pending',
            totalAmount: '$200.00',
            paymentMethod: 'Bank Transfer',
        },
        {
            invoice: 'INV007',
            paymentStatus: 'Unpaid',
            totalAmount: '$300.00',
            paymentMethod: 'Credit Card',
        },
    ];
    return (
        <div className='max-w-5xl mx-auto lg:px-6'>
            <div className='flex items-center justify-between mb-4'>
                <div className='flex flex-col'>
                    <h2 className='text-lg font-bold'>Messages</h2>
                    <p className='font-semibold text-gray-500'>
                        500 Messages | 10 Unread
                    </p>
                </div>
                <Button size='sm' variant='primary'>
                    Mark all As Read
                </Button>
            </div>

            <Table>
                <TableCaption>A list of your recent invoices.</TableCaption>
                <TableHeader>
                    <TableRow>
                        <TableHead className='w-[100px]'>Subject</TableHead>
                        <TableHead>Sender</TableHead>
                        <TableHead>Message</TableHead>
                        <TableHead className='text-right'>Date</TableHead>
                    </TableRow>
                </TableHeader>
                <TableBody>
                    {invoices.map((invoice) => (
                        <TableRow key={invoice.invoice}>
                            <TableCell className='font-medium'>
                                {invoice.invoice}
                            </TableCell>
                            <TableCell>{invoice.paymentStatus}</TableCell>
                            <TableCell>{invoice.paymentMethod}</TableCell>
                            <TableCell className='text-right'>
                                {invoice.totalAmount}
                            </TableCell>
                        </TableRow>
                    ))}
                </TableBody>
                <TableFooter>
                    <TableRow>
                        <TableCell colSpan={3}>Total</TableCell>
                        <TableCell className='text-right'>$2,500.00</TableCell>
                    </TableRow>
                </TableFooter>
            </Table>
        </div>
    );
};
export default Inbox;
