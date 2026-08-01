import Link from "next/link";
import { buttonVariants } from "@/components/ui/button";
import { cn } from "@/lib/utils";
import type { VariantProps } from "class-variance-authority";
import type { ComponentProps } from "react";

type ButtonLinkProps = ComponentProps<typeof Link> &
  VariantProps<typeof buttonVariants> & {
    style?: React.CSSProperties;
    className?: string;
  };

/**
 * A styled link that looks like a Button.
 * Use this instead of <Button asChild><Link /></Button> since
 * this version of shadcn uses base-ui which has no asChild prop.
 */
export function ButtonLink({
  href,
  variant = "default",
  size = "default",
  className,
  style,
  children,
  ...rest
}: ButtonLinkProps) {
  return (
    <Link
      href={href}
      className={cn(buttonVariants({ variant, size }), className)}
      style={style}
      {...rest}
    >
      {children}
    </Link>
  );
}

type AnchorButtonProps = ComponentProps<"a"> &
  VariantProps<typeof buttonVariants> & {
    style?: React.CSSProperties;
    className?: string;
  };

/**
 * A styled <a> anchor that looks like a Button.
 * Use for external links, tel:, mailto:, etc.
 */
export function AnchorButton({
  variant = "default",
  size = "default",
  className,
  style,
  children,
  ...rest
}: AnchorButtonProps) {
  return (
    <a
      className={cn(buttonVariants({ variant, size }), className)}
      style={style}
      {...rest}
    >
      {children}
    </a>
  );
}
