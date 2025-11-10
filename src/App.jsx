import React, { useState } from 'react';
import { Upload, Zap, Shield, TrendingUp, Lock } from 'lucide-react';

export default function App() {
  const [isDragging, setIsDragging] = useState(false);

  const handleDragOver = (e) => {
    e.preventDefault();
    setIsDragging(true);
  };

  const handleDragLeave = () => {
    setIsDragging(false);
  };

  const handleDrop = (e) => {
    e.preventDefault();
    setIsDragging(false);
    // Handle file upload logic here
    const files = e.dataTransfer.files;
    console.log('Files dropped:', files);
  };

  const handleFileSelect = (e) => {
    const files = e.target.files;
    console.log('Files selected:', files);
  };

  return (
    <div className="min-h-screen bg-gradient-to-b from-gray-50 to-white">
      {/* Hero Section */}
      <section className="pt-20 pb-32 px-4 sm:px-6 lg:px-8">
        <div className="max-w-6xl mx-auto text-center">
          <div className="inline-block mb-8">
            <span className="px-6 py-2 bg-cyan-50 text-cyan-600 rounded-full text-sm font-medium border border-cyan-100">
              Next-Generation Genomic Analysis
            </span>
          </div>
          
          <h1 className="text-5xl sm:text-6xl lg:text-7xl font-bold text-gray-900 mb-6 leading-tight">
            Unlock Your{' '}
            <span className="bg-gradient-to-r from-cyan-500 to-purple-400 bg-clip-text text-transparent">
              Genetic Insights
            </span>
          </h1>
          
          <p className="text-xl text-gray-600 mb-12 max-w-3xl mx-auto leading-relaxed">
            Upload your raw genetic data and discover comprehensive insights with our advanced genomic processing platform
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button className="px-8 py-4 bg-cyan-500 text-white rounded-lg font-semibold hover:bg-cyan-600 transition-all duration-300 shadow-lg shadow-cyan-500/50 hover:shadow-2xl hover:shadow-cyan-400/60 animate-pulse hover:animate-none flex items-center justify-center">
              Upload Your Data
              <svg className="w-5 h-5 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
              </svg>
            </button>
            <button className="px-8 py-4 bg-white text-gray-900 rounded-lg font-semibold hover:bg-gray-50 transition-all duration-300 border-2 border-gray-200">
              Learn More
            </button>
          </div>
        </div>
      </section>

      {/* Upload Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-white">
        <div className="max-w-5xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-4xl sm:text-5xl font-bold text-gray-900 mb-4">
              Upload Your Genetic Data
            </h2>
            <p className="text-lg text-gray-600">
              Drag and drop your raw data file or click to browse
            </p>
          </div>

          <div
            onDragOver={handleDragOver}
            onDragLeave={handleDragLeave}
            onDrop={handleDrop}
            className={`relative border-2 border-dashed rounded-3xl p-16 text-center transition-all duration-300 ${
              isDragging
                ? 'border-cyan-500 bg-cyan-50'
                : 'border-gray-300 bg-gray-50'
            }`}
          >
            <div className="flex flex-col items-center">
              <div className="w-24 h-24 bg-cyan-100 rounded-full flex items-center justify-center mb-6">
                <Upload className="w-12 h-12 text-cyan-500" />
              </div>
              
              <h3 className="text-2xl font-semibold text-gray-900 mb-2">
                Drop your file here
              </h3>
              
              <p className="text-gray-600 mb-6">
                Supports .txt, .csv, .vcf, and other genetic data formats
              </p>
              
              <label className="cursor-pointer">
                <input
                  type="file"
                  className="hidden"
                  onChange={handleFileSelect}
                  accept=".txt,.csv,.vcf"
                />
                <span className="px-8 py-3 bg-cyan-500 text-white rounded-lg font-semibold hover:bg-cyan-600 transition-all duration-300 inline-block">
                  Browse Files
                </span>
              </label>
            </div>
          </div>

          <div className="mt-8 p-6 bg-blue-50 rounded-2xl border border-blue-100">
            <div className="flex items-start">
              <Lock className="w-6 h-6 text-orange-500 mt-1 mr-3 flex-shrink-0" />
              <p className="text-gray-700">
                Your data is encrypted and processed securely. We never share your genetic information.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl sm:text-5xl font-bold text-gray-900 mb-4">
              Why Choose Our Platform
            </h2>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto">
              Advanced technology meets user-friendly design for the ultimate genomic analysis experience
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              {
                icon: Zap,
                title: 'Lightning Fast',
                description: 'Process thousands of genetic variants in seconds with our optimized algorithms'
              },
              {
                icon: Shield,
                title: 'Secure & Private',
                description: 'Bank-level encryption ensures your genetic data remains completely confidential'
              },
              {
                icon: TrendingUp,
                title: 'Comprehensive Reports',
                description: 'Get detailed insights with easy-to-understand visualizations and actionable data'
              },
              {
                icon: Lock,
                title: 'HIPAA Compliant',
                description: 'Fully compliant with healthcare data protection standards and regulations'
              }
            ].map((feature, idx) => (
              <div
                key={idx}
                className="group p-8 bg-white rounded-2xl border border-gray-200 hover:border-cyan-300 hover:shadow-xl transition-all duration-300 hover:-translate-y-1"
              >
                <div className="w-16 h-16 bg-cyan-500 rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300">
                  <feature.icon className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-3">
                  {feature.title}
                </h3>
                <p className="text-gray-600 leading-relaxed">
                  {feature.description}
                </p>
              </div>
            ))}
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