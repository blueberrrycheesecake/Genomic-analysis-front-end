import { Link } from 'react-router-dom';
import React, { useState } from 'react';
import { Cloud, Database, Cpu, Lock, Zap, GitBranch, Container, Shield, Server, Workflow, ArrowRight, CheckCircle2 } from 'lucide-react';

export default function LearnMore() {
  const [activeSection, setActiveSection] = useState(null);

  const architectureComponents = [
    {
      icon: Database,
      title: 'AWS S3 Storage',
      subtitle: 'Scalable Data Lake',
      description: 'Your genomic data is stored in Amazon S3, providing unlimited scalability, 99.999999999% durability, and instant access to petabytes of genetic information.',
      gradient: 'from-blue-500 to-cyan-500',
      features: ['Unlimited storage capacity', 'Automatic data redundancy', 'Lifecycle management']
    },
    {
      icon: Cpu,
      title: 'AWS Batch Processing',
      subtitle: 'Compute at Scale',
      description: 'Process thousands of samples simultaneously with AWS Batch, dynamically scaling compute resources to match your workload demands.',
      gradient: 'from-purple-500 to-pink-500',
      features: ['Auto-scaling compute', 'Cost-optimized processing', 'Parallel job execution']
    },
    {
      icon: GitBranch,
      title: 'Nextflow Engine',
      subtitle: 'Pipeline Orchestration',
      description: 'Nextflow powers our workflow engine, enabling reproducible, portable, and scalable genomic analysis pipelines with advanced data flow management.',
      gradient: 'from-green-500 to-emerald-500',
      features: ['Reproducible workflows', 'Multi-cloud portability', 'Real-time monitoring']
    },
    {
      icon: Container,
      title: 'Docker & ECR',
      subtitle: 'Containerized Tools',
      description: 'All analysis tools run in Docker containers stored in Amazon ECR, ensuring consistent execution environments and version control across all processes.',
      gradient: 'from-orange-500 to-red-500',
      features: ['Isolated environments', 'Version control', 'Rapid deployment']
    },
    {
      icon: Workflow,
      title: 'Lambda & Step Functions',
      subtitle: 'Serverless Orchestration',
      description: 'AWS Lambda and Step Functions coordinate your entire pipeline, managing complex workflows without infrastructure overhead.',
      gradient: 'from-indigo-500 to-purple-500',
      features: ['Event-driven automation', 'Visual workflow tracking', 'Cost-effective execution']
    },
    {
      icon: Shield,
      title: 'VPC & IAM Security',
      subtitle: 'Enterprise-Grade Protection',
      description: 'Your data stays protected within isolated Virtual Private Clouds with granular IAM permissions controlling every access point.',
      gradient: 'from-red-500 to-pink-500',
      features: ['Network isolation', 'Fine-grained access control', 'Audit logging']
    }
  ];

  const pipeline = [
    { step: '1', title: 'Upload', desc: 'Secure data ingestion to S3' },
    { step: '2', title: 'Trigger', desc: 'Lambda initiates workflow' },
    { step: '3', title: 'Process', desc: 'Nextflow orchestrates analysis' },
    { step: '4', title: 'Compute', desc: 'AWS Batch executes jobs' },
    { step: '5', title: 'Results', desc: 'Insights delivered to you' }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-b from-gray-50 to-white">
      {/* Hero Section */}
      <section className="pt-20 pb-16 px-4 sm:px-6 lg:px-8 bg-gradient-to-br from-cyan-50 via-purple-50 to-pink-50">
        <div className="max-w-6xl mx-auto text-center">
          <div className="inline-block mb-6">
            <span className="px-6 py-2 bg-white text-cyan-600 rounded-full text-sm font-medium border border-cyan-200 shadow-sm">
              Cloud-Native Genomic Architecture
            </span>
          </div>
          
          <h1 className="text-5xl sm:text-6xl font-bold text-gray-900 mb-6 leading-tight">
            Built on{' '}
            <span className="bg-gradient-to-r from-cyan-500 via-purple-500 to-pink-500 bg-clip-text text-transparent">
              AWS Infrastructure
            </span>
          </h1>
          
          <p className="text-xl text-gray-600 mb-8 max-w-3xl mx-auto leading-relaxed">
            Our platform leverages cutting-edge cloud technologies to deliver scalable, secure, and lightning-fast genomic analysis
          </p>

          <div className="flex flex-wrap justify-center gap-4 mb-12">
            {['Scalable', 'Secure', 'Serverless', 'Cost-Effective'].map((tag, idx) => (
              <span key={idx} className="px-4 py-2 bg-white rounded-full text-sm font-medium text-gray-700 shadow-sm border border-gray-200">
                <CheckCircle2 className="w-4 h-4 inline mr-2 text-green-500" />
                {tag}
              </span>
            ))}
          </div>
        </div>
      </section>

      {/* Pipeline Flow */}
      <section className="py-16 px-4 sm:px-6 lg:px-8 bg-white">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">
              How It Works
            </h2>
            <p className="text-lg text-gray-600">
              From upload to insights in five seamless steps
            </p>
          </div>

          <div className="flex flex-col md:flex-row items-center justify-between gap-4">
            {pipeline.map((item, idx) => (
              <React.Fragment key={idx}>
                <div className="flex flex-col items-center text-center">
                  <div className="w-16 h-16 bg-gradient-to-br from-cyan-500 to-purple-500 rounded-full flex items-center justify-center mb-4 shadow-lg">
                    <span className="text-2xl font-bold text-white">{item.step}</span>
                  </div>
                  <h3 className="text-lg font-bold text-gray-900 mb-2">{item.title}</h3>
                  <p className="text-sm text-gray-600 max-w-32">{item.desc}</p>
                </div>
                {idx < pipeline.length - 1 && (
                  <ArrowRight className="hidden md:block w-8 h-8 text-gray-300" />
                )}
              </React.Fragment>
            ))}
          </div>
        </div>
      </section>

      {/* Architecture Components */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-b from-gray-50 to-white">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl sm:text-5xl font-bold text-gray-900 mb-4">
              Powered by Enterprise Cloud
            </h2>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto">
              Every component is carefully orchestrated to deliver unmatched performance, security, and reliability
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {architectureComponents.map((component, idx) => (
              <div
                key={idx}
                className="group relative bg-white rounded-3xl p-8 border border-gray-200 hover:border-transparent hover:shadow-2xl transition-all duration-500 cursor-pointer overflow-hidden"
                onMouseEnter={() => setActiveSection(idx)}
                onMouseLeave={() => setActiveSection(null)}
              >
                <div className={`absolute inset-0 bg-gradient-to-br ${component.gradient} opacity-0 group-hover:opacity-5 transition-opacity duration-500`} />
                
                <div className={`relative w-16 h-16 bg-gradient-to-br ${component.gradient} rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300 shadow-lg`}>
                  <component.icon className="w-8 h-8 text-white" />
                </div>

                <div className="relative">
                  <div className="text-xs font-semibold text-gray-500 mb-2 uppercase tracking-wider">
                    {component.subtitle}
                  </div>
                  <h3 className="text-2xl font-bold text-gray-900 mb-4">
                    {component.title}
                  </h3>
                  <p className="text-gray-600 leading-relaxed mb-6">
                    {component.description}
                  </p>

                  <div className="space-y-2">
                    {component.features.map((feature, fIdx) => (
                      <div key={fIdx} className="flex items-center text-sm text-gray-700">
                        <div className={`w-1.5 h-1.5 bg-gradient-to-r ${component.gradient} rounded-full mr-2`} />
                        {feature}
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Technical Excellence */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-white">
        <div className="max-w-6xl mx-auto">
          <div className="bg-gradient-to-br from-cyan-500 via-purple-500 to-pink-500 rounded-3xl p-12 text-white shadow-2xl">
            <div className="text-center mb-12">
              <h2 className="text-4xl font-bold mb-4">
                Why Our Architecture Matters
              </h2>
              <p className="text-lg text-cyan-50">
                Built for the future of genomic medicine
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <div className="text-center">
                <div className="text-5xl font-bold mb-2">99.99%</div>
                <div className="text-cyan-100">Uptime Guarantee</div>
              </div>
              <div className="text-center">
                <div className="text-5xl font-bold mb-2">10,000+</div>
                <div className="text-cyan-100">Samples Processed Daily</div>
              </div>
              <div className="text-center">
                <div className="text-5xl font-bold mb-2">&lt;10min</div>
                <div className="text-cyan-100">Average Processing Time</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-b from-gray-50 to-white">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-4xl font-bold text-gray-900 mb-6">
            Ready to Experience the Difference?
          </h2>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link to="/">
            <button className="px-8 py-4 bg-gradient-to-r from-cyan-500 to-purple-500 text-white rounded-lg font-semibold hover:shadow-2xl transition-all duration-300 transform hover:scale-105">
             Get Started Now
            </button>
            </Link>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-12 px-4 sm:px-6 lg:px-8 border-t border-gray-200 bg-gray-50">
        <div className="max-w-7xl mx-auto text-center text-gray-600">
          <p>&copy; 2024 Genomic Analysis Platform. All rights reserved.</p>
        </div>
      </footer>
    </div>
  );
}