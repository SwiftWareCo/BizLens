import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { ArrowRight, Sparkles, Search, BarChart3, Globe } from 'lucide-react';
import Link from 'next/link';

const tools = [
  {
    title: 'Brand Identity Audit',
    description:
      'Analyze your logo, website, and social presence to get actionable improvements.',
    icon: Sparkles,
    href: '/dashboard/tools/brand-audit',
    badge: 'New',
    popular: true,
  },
  {
    title: 'SEO Analyzer',
    description:
      "Check your website's search engine optimization and get a detailed report.",
    icon: Search,
    href: '#',
    badge: 'Coming Soon',
    disabled: true,
  },
  {
    title: 'Market Competitor Analysis',
    description:
      'Understand your position in the market relative to your competitors.',
    icon: BarChart3,
    href: '#',
    badge: 'Coming Soon',
    disabled: true,
  },
  {
    title: 'Website Performance',
    description: 'Test your website speed and user experience metrics.',
    icon: Globe,
    href: '#',
    badge: 'Coming Soon',
    disabled: true,
  },
];

export default function ToolsPage() {
  return (
    <div className='space-y-8'>
      <div className='flex flex-col gap-2'>
        <h1 className='text-3xl font-bold tracking-tight'>Business Tools</h1>
        <p className='text-muted-foreground'>
          Powerful AI-driven tools to analyze and improve your business.
        </p>
      </div>

      <div className='grid gap-6 md:grid-cols-2 lg:grid-cols-3'>
        {tools.map((tool) => (
          <Card
            key={tool.title}
            className={`glass-card flex flex-col ${
              tool.disabled ? 'opacity-60' : ''
            }`}
          >
            <CardHeader>
              <div className='flex items-center justify-between'>
                <div className='p-2 bg-primary/10 rounded-lg'>
                  <tool.icon className='h-6 w-6 text-primary' />
                </div>
                {tool.badge && (
                  <Badge
                    variant={tool.badge === 'New' ? 'default' : 'secondary'}
                  >
                    {tool.badge}
                  </Badge>
                )}
              </div>
              <CardTitle className='mt-4'>{tool.title}</CardTitle>
              <CardDescription>{tool.description}</CardDescription>
            </CardHeader>
            <CardContent className='flex-1'>
              {/* Optional content area */}
            </CardContent>
            <CardFooter>
              <Button
                asChild={!tool.disabled}
                disabled={tool.disabled}
                className='w-full group'
              >
                {tool.disabled ? (
                  <span>Coming Soon</span>
                ) : (
                  <Link href={tool.href}>
                    Launch Tool
                    <ArrowRight className='ml-2 h-4 w-4 transition-transform group-hover:translate-x-1' />
                  </Link>
                )}
              </Button>
            </CardFooter>
          </Card>
        ))}
      </div>
    </div>
  );
}
