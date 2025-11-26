import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { ArrowRight, Activity, Users, DollarSign } from 'lucide-react';
import Link from 'next/link';

export default function DashboardPage() {
  return (
    <div className='space-y-8'>
      <div className='flex items-center justify-between'>
        <h1 className='text-3xl font-bold tracking-tight'>Dashboard</h1>
        <div className='flex items-center gap-2'>
          <Button>Download Report</Button>
        </div>
      </div>

      <div className='grid gap-4 md:grid-cols-3'>
        <Card className='glass-card'>
          <CardHeader className='flex flex-row items-center justify-between space-y-0 pb-2'>
            <CardTitle className='text-sm font-medium'>Total Revenue</CardTitle>
            <DollarSign className='h-4 w-4 text-muted-foreground' />
          </CardHeader>
          <CardContent>
            <div className='text-2xl font-bold'>$45,231.89</div>
            <p className='text-xs text-muted-foreground'>
              +20.1% from last month
            </p>
          </CardContent>
        </Card>
        <Card className='glass-card'>
          <CardHeader className='flex flex-row items-center justify-between space-y-0 pb-2'>
            <CardTitle className='text-sm font-medium'>Active Users</CardTitle>
            <Users className='h-4 w-4 text-muted-foreground' />
          </CardHeader>
          <CardContent>
            <div className='text-2xl font-bold'>+2350</div>
            <p className='text-xs text-muted-foreground'>
              +180.1% from last month
            </p>
          </CardContent>
        </Card>
        <Card className='glass-card'>
          <CardHeader className='flex flex-row items-center justify-between space-y-0 pb-2'>
            <CardTitle className='text-sm font-medium'>Active Audits</CardTitle>
            <Activity className='h-4 w-4 text-muted-foreground' />
          </CardHeader>
          <CardContent>
            <div className='text-2xl font-bold'>+12,234</div>
            <p className='text-xs text-muted-foreground'>
              +19% from last month
            </p>
          </CardContent>
        </Card>
      </div>

      <div className='grid gap-4 md:grid-cols-2 lg:grid-cols-7'>
        <Card className='col-span-4 glass-card'>
          <CardHeader>
            <CardTitle>Recent Activity</CardTitle>
            <CardDescription>You made 265 sales this month.</CardDescription>
          </CardHeader>
          <CardContent>
            <div className='space-y-4'>
              {/* Placeholder for activity list */}
              <div className='flex items-center'>
                <div className='ml-4 space-y-1'>
                  <p className='text-sm font-medium leading-none'>
                    Brand Audit Completed
                  </p>
                  <p className='text-sm text-muted-foreground'>Just now</p>
                </div>
                <div className='ml-auto font-medium'>Success</div>
              </div>
              <div className='flex items-center'>
                <div className='ml-4 space-y-1'>
                  <p className='text-sm font-medium leading-none'>
                    New User Registered
                  </p>
                  <p className='text-sm text-muted-foreground'>2 minutes ago</p>
                </div>
                <div className='ml-auto font-medium'>Success</div>
              </div>
            </div>
          </CardContent>
        </Card>
        <Card className='col-span-3 glass-card'>
          <CardHeader>
            <CardTitle>Recommended Tools</CardTitle>
            <CardDescription>Tools to grow your business.</CardDescription>
          </CardHeader>
          <CardContent className='space-y-4'>
            <div className='flex items-center justify-between p-4 border rounded-lg bg-background/50'>
              <div>
                <h3 className='font-semibold'>Brand Identity Audit</h3>
                <p className='text-sm text-muted-foreground'>
                  Analyze your brand presence.
                </p>
              </div>
              <Link href='/dashboard/tools/brand-audit'>
                <Button size='sm' variant='outline'>
                  <ArrowRight className='h-4 w-4' />
                </Button>
              </Link>
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  );
}
