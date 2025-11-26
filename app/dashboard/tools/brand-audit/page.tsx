import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import {
  ArrowRight,
  CheckCircle2,
  Sparkles,
  Upload,
  ScanEye,
  FileText,
} from 'lucide-react';

export default function BrandAuditPage() {
  return (
    <div className='space-y-12 max-w-5xl mx-auto'>
      {/* Hero Section */}
      <div className='text-center space-y-6 py-12'>
        <div className='inline-flex items-center rounded-full border px-2.5 py-0.5 text-xs font-semibold transition-colors focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2 border-transparent bg-primary text-primary-foreground hover:bg-primary/80 shadow-lg shadow-primary/20'>
          <Sparkles className='mr-1 h-3 w-3' />
          AI-Powered Analysis
        </div>
        <h1 className='text-4xl font-extrabold tracking-tight lg:text-5xl bg-linear-to-r from-foreground to-foreground/60 bg-clip-text text-transparent'>
          Brand Identity Audit
        </h1>
        <p className='text-xl text-muted-foreground max-w-2xl mx-auto'>
          Upload your logo and provide your website URL. Our AI will analyze
          your brand consistency, visual appeal, and market positioning.
        </p>
        <div className='flex justify-center gap-4'>
          <Button
            size='lg'
            className='h-12 px-8 text-lg shadow-lg shadow-primary/20'
          >
            Start New Audit
            <ArrowRight className='ml-2 h-5 w-5' />
          </Button>
          <Button size='lg' variant='outline' className='h-12 px-8 text-lg'>
            View Sample Report
          </Button>
        </div>
      </div>

      {/* How it works */}
      <div className='grid gap-8 md:grid-cols-3'>
        <Card className='glass-card border-none shadow-none bg-transparent'>
          <CardContent className='pt-6 text-center space-y-4'>
            <div className='mx-auto w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center'>
              <Upload className='h-6 w-6 text-primary' />
            </div>
            <h3 className='text-xl font-bold'>1. Upload Assets</h3>
            <p className='text-muted-foreground'>
              Upload your logo files and provide links to your website and
              social media profiles.
            </p>
          </CardContent>
        </Card>
        <Card className='glass-card border-none shadow-none bg-transparent'>
          <CardContent className='pt-6 text-center space-y-4'>
            <div className='mx-auto w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center'>
              <ScanEye className='h-6 w-6 text-primary' />
            </div>
            <h3 className='text-xl font-bold'>2. AI Analysis</h3>
            <p className='text-muted-foreground'>
              Our system analyzes color psychology, typography, and consistency
              across platforms.
            </p>
          </CardContent>
        </Card>
        <Card className='glass-card border-none shadow-none bg-transparent'>
          <CardContent className='pt-6 text-center space-y-4'>
            <div className='mx-auto w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center'>
              <FileText className='h-6 w-6 text-primary' />
            </div>
            <h3 className='text-xl font-bold'>3. Get Report</h3>
            <p className='text-muted-foreground'>
              Receive a comprehensive report with actionable insights to improve
              your brand.
            </p>
          </CardContent>
        </Card>
      </div>

      {/* Features / Benefits */}
      <div className='rounded-2xl border bg-card/50 p-8 backdrop-blur-sm'>
        <h2 className='text-2xl font-bold mb-6 text-center'>What we analyze</h2>
        <div className='grid gap-4 md:grid-cols-2 lg:grid-cols-4'>
          {[
            'Logo Scalability',
            'Color Palette Harmony',
            'Typography Consistency',
            'Accessibility Check',
            'Brand Voice Analysis',
            'Social Media Alignment',
            'Competitor Comparison',
            'Market Fit Score',
          ].map((feature) => (
            <div key={feature} className='flex items-center gap-2'>
              <CheckCircle2 className='h-5 w-5 text-green-500' />
              <span className='font-medium'>{feature}</span>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
