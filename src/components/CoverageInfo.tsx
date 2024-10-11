import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import * as z from 'zod';
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from '@/components/ui/form';
import { Input } from '@/components/ui/input';

const formSchema = z.object({
  personalContents: z.string().regex(/^\$?\d+(\,\d{3})*(\.\d{2})?$/, 'Invalid amount'),
  personalLiability: z.string().regex(/^\$?\d+(\,\d{3})*(\.\d{2})?$/, 'Invalid amount'),
  dwellingAmount: z.string().regex(/^\$?\d+(\,\d{3})*(\.\d{2})?$/, 'Invalid amount'),
  lossOfUse: z.string().regex(/^\$?\d+(\,\d{3})*(\.\d{2})?$/, 'Invalid amount'),
});

const CoverageInfo = () => {
  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      personalContents: '',
      personalLiability: '',
      dwellingAmount: '',
      lossOfUse: '',
    },
  });

  return (
    <div className="space-y-6">
      <h1 className="text-3xl font-bold">Choose your coverage amounts</h1>
      <Form {...form}>
        <form className="space-y-4">
          <FormField
            control={form.control}
            name="personalContents"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Personal Contents</FormLabel>
                <FormControl>
                  <Input placeholder="$50,000" {...field} />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
          <FormField
            control={form.control}
            name="personalLiability"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Personal Liability</FormLabel>
                <FormControl>
                  <Input placeholder="$100,000" {...field} />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
          <FormField
            control={form.control}
            name="dwellingAmount"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Dwelling Amount</FormLabel>
                <FormControl>
                  <Input placeholder="$200,000" {...field} />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
          <FormField
            control={form.control}
            name="lossOfUse"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Loss of Use</FormLabel>
                <FormControl>
                  <Input placeholder="$20,000" {...field} />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
        </form>
      </Form>
    </div>
  );
};

export default CoverageInfo;