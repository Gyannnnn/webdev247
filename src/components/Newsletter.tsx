"use client"


import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import {
  Form,
  FormControl,
 
  FormField,
  FormItem,
 
  FormMessage,
} from "@/components/ui/form"
import { zodResolver } from "@hookform/resolvers/zod"
import { useForm } from "react-hook-form"
import * as z from "zod"

const formSchema = z.object({
  email: z.string().email({
    message: "Please enter a valid email address.",
  }),
})

export default function Newsletter() {
      // const { toast } = useToast()
  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      email: "",
    },
  })

  const onSubmit = (values: z.infer<typeof formSchema>) => {
    // toast({
    //   title: "Subscribed!",
    //   description: "Thank you for subscribing to our newsletter.",
    // })
    // form.reset()
    console.log(values)
  }
  return (
    <section className="py-16 md:py-24">
        <div className="container px-4 md:px-6">
          <Card className="">
            <CardContent className="p-8">
              <div className="flex flex-col items-center justify-center space-y-4 text-center">
                <div className="space-y-2">
                  <h2 className="text-3xl font-bold tracking-tighter">
                    Stay Updated
                  </h2>
                  <p className="mx-auto max-w-[600px] text-gray-400 md:text-xl">
                    Subscribe to our newsletter for the latest articles, tutorials, and tech news.
                  </p>
                </div>
                <div className="w-full max-w-sm space-y-2">
                  <Form {...form}>
                    <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-4">
                      <FormField
                        control={form.control}
                        name="email"
                        render={({ field }) => (
                          <FormItem>
                            <FormControl>
                              <div className="flex space-x-2">
                                <Input
                                  placeholder="Enter your email"
                                  type="email"
                                  {...field}
                                />
                                <Button type="submit">Subscribe</Button>
                              </div>
                            </FormControl>
                            <FormMessage />
                          </FormItem>
                        )}
                      />
                    </form>
                  </Form>
                  <p className="text-xs text-muted-foreground">
                    We respect your privacy. Unsubscribe at any time.
                  </p>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
      </section>
  )
}
