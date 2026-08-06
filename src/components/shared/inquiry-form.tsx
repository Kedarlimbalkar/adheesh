"use client";

import * as React from "react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { z } from "zod";
import { Label } from "@/components/ui/label";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Button } from "@/components/ui/button";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { PRODUCTS_DATA } from "@/data/products";
import { Loader2, CheckCircle2 } from "lucide-react";

const inquirySchema = z.object({
  name: z.string().min(2, "Please enter your full name"),
  company: z.string().optional(),
  country: z.string().min(2, "Please enter your country"),
  email: z.string().email("Enter a valid business email"),
  phone: z.string().optional(),
  productId: z.string().min(1, "Please select a product"),
  volume: z.string().optional(),
  message: z.string().min(10, "Tell us a little more about your requirement"),
});

export type InquiryFormValues = z.infer<typeof inquirySchema>;

export function InquiryForm({
  defaultProductId,
  onSuccess,
}: {
  defaultProductId?: string | null;
  onSuccess?: () => void;
}) {
  const [status, setStatus] = React.useState<"idle" | "submitting" | "success" | "error">(
    "idle"
  );

  const {
    register,
    handleSubmit,
    setValue,
    watch,
    formState: { errors },
  } = useForm<InquiryFormValues>({
    resolver: zodResolver(inquirySchema),
    defaultValues: { productId: defaultProductId ?? "" },
  });

  React.useEffect(() => {
    if (defaultProductId) setValue("productId", defaultProductId);
  }, [defaultProductId, setValue]);

  const productId = watch("productId");

  async function onSubmit(values: InquiryFormValues) {
    setStatus("submitting");
    try {
      const res = await fetch("/api/inquiry", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(values),
      });
      if (!res.ok) throw new Error("Request failed");
      setStatus("success");
      onSuccess?.();
    } catch {
      setStatus("error");
    }
  }

  if (status === "success") {
    return (
      <div className="flex flex-col items-center text-center gap-3 py-10">
        <CheckCircle2 className="h-12 w-12 text-secondary" />
        <p className="font-display text-lg font-semibold text-ink">Inquiry Sent</p>
        <p className="text-sm text-muted-foreground max-w-xs">
          Thank you for reaching out. Our export team will get back to you within 24 hours.
        </p>
      </div>
    );
  }

  return (
    <form onSubmit={handleSubmit(onSubmit)} className="space-y-4">
      <div>
        <Label htmlFor="name">Full Name</Label>
        <Input id="name" placeholder="John Carter" {...register("name")} />
        {errors.name && <p className="text-xs text-red-600 mt-1">{errors.name.message}</p>}
      </div>

      <div className="grid grid-cols-2 gap-4">
        <div>
          <Label htmlFor="company">Company Name</Label>
          <Input id="company" placeholder="Global Foods Inc." {...register("company")} />
        </div>
        <div>
          <Label htmlFor="country">Country</Label>
          <Input id="country" placeholder="Germany" {...register("country")} />
          {errors.country && <p className="text-xs text-red-600 mt-1">{errors.country.message}</p>}
        </div>
      </div>

      <div className="grid grid-cols-2 gap-4">
        <div>
          <Label htmlFor="email">Business Email</Label>
          <Input id="email" type="email" placeholder="you@company.com" {...register("email")} />
          {errors.email && <p className="text-xs text-red-600 mt-1">{errors.email.message}</p>}
        </div>
        <div>
          <Label htmlFor="phone">Phone / WhatsApp</Label>
          <Input id="phone" placeholder="+49 ..." {...register("phone")} />
        </div>
      </div>

      <div>
        <Label htmlFor="productId">Product of Interest</Label>
        <Select value={productId} onValueChange={(v) => setValue("productId", v, { shouldValidate: true })}>
          <SelectTrigger id="productId">
            <SelectValue placeholder="Select a product" />
          </SelectTrigger>
          <SelectContent>
            {PRODUCTS_DATA.map((p) => (
              <SelectItem key={p.id} value={p.id}>
                {p.name}
              </SelectItem>
            ))}
          </SelectContent>
        </Select>
        {errors.productId && (
          <p className="text-xs text-red-600 mt-1">{errors.productId.message}</p>
        )}
      </div>

      <div>
        <Label htmlFor="volume">Estimated Order Volume</Label>
        <Input id="volume" placeholder="e.g. 2 containers / 25 tons" {...register("volume")} />
      </div>

      <div>
        <Label htmlFor="message">Message / Custom Specifications</Label>
        <Textarea
          id="message"
          placeholder="Let us know your required grade, packaging, and delivery port..."
          {...register("message")}
        />
        {errors.message && <p className="text-xs text-red-600 mt-1">{errors.message.message}</p>}
      </div>

      <Button type="submit" size="lg" className="w-full" disabled={status === "submitting"}>
        {status === "submitting" && <Loader2 className="h-4 w-4 animate-spin" />}
        {status === "submitting" ? "Sending..." : "Send Inquiry"}
      </Button>

      {status === "error" && (
        <p className="text-xs text-red-600 text-center">
          Something went wrong. Please try again or reach us on WhatsApp.
        </p>
      )}
    </form>
  );
}
