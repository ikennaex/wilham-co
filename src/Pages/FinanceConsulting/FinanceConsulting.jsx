import React from "react";

const FinanceConsulting = () => {
  return (
    <section className="mt-20 bg-black/95 text-white">
      <div className="max-w-7xl mx-auto px-6 py-20">
        <div className="max-w-3xl">
          <h2 className="mt-4 text-4xl md:text-5xl font-bold leading-tight">
            Finance Consulting
          </h2>
        </div>

        {/* Services Grid */}
        <div className="mt-16 grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Credit Risk Analysis */}
          <div>
            <h2 className="text-xl font-semibold mb-6 pb-2 border-b-2 border-white inline-block">
              Credit Risk Analysis
            </h2>
            <ul className="space-y-3 text-gray-300">
              <li>Understanding risk.</li>
              <li>Loan Structure.</li>
              <li>Credit and risk management.</li>
              <li>Basic accounting concepts and issues.</li>
              <li>Risk analysis framework - Top down approach.</li>
              <li>Fundamentals of credit.</li>
              <li>Bank credit products.</li>
              <li>Borrowing cause and loan structure.</li>
              <li>Legal aspect of banking and securities for lending.</li>
              <li>Balance sheet recognition.</li>
              <li>Loan monitoring/Delinquent loan management.</li>
            </ul>
          </div>

          {/* Corporate Finance Training */}
          <div>
            <h2 className="text-xl font-semibold mb-6 pb-2 border-b-2 border-white inline-block">
              Corporate Finance Training
            </h2>
            <ul className="space-y-3 text-gray-300">
              <li>Time value of money and project evaluation.</li>
              <li>Financial statement analysis.</li>
              <li>Ratio analysis and interpretation.</li>
              <li>Assessing cost of capital.</li>
              <li>Investment bankig and other corporate finance advisory roles.</li>
              <li>Capital market instruments and selecting appropriate capital market instruments.</li>
              <li>Equity capital raising methods.</li>
              <li>Company valuation techniques.</li>
              <li>Financing acquisition and analysing takeovers.</li>
              <li>Further corporate finance deals.</li>
            </ul>
          </div>

          {/* Financial Advisory & Business Advisory */}
          <div>
            <h2 className="text-xl font-semibold mb-6 pb-2 border-b-2 border-white inline-block">
              Financial Advisory
            </h2>
            <ul className="space-y-3 text-gray-300">
              <li>Debit and equity capital raising.</li>
              <li>Capital optimization.</li>
              <li>Investment analysis and recommendation.</li>
              <li>Design and implementation of stock credit control systems.</li>
              <li>Development and implementation of costing systems.</li>
            </ul>

            <h2 className="text-xl font-semibold mb-6 pb-2 border-b-2 border-white inline-block mt-10">
              Business Advisory
            </h2>
            <ul className="space-y-3 text-gray-300">
              <li>Corporate restructing.</li>
              <li>Change and turn around management.</li>
              <li>Corporate and business units strategy formation.</li>
              <li>Business process review and business process re-engineering.</li>
              <li>Other business planning and strategy formulation modules for startup and existing businesses.</li>
              <li>Human Resource Management.</li>
              <li>Management Information System.</li>
              <li>Economic studies.</li>
            </ul>
          </div>

          {/* Risk Analysis/Management Training */}
          <div>
            <h2 className="text-xl font-semibold mb-6 pb-2 border-b-2 border-white inline-block">
              Risk Analysis/Management Training
            </h2>
            <ul className="space-y-3 text-gray-300">
              <li>Introduction to risk management.</li>
              <li>Credit risk management.</li>
              <li>Market and Operational risk management.</li>
              <li>Analyzing other types of risk (tax, legal, political, accounting, liquidity etc)</li>
              <li>Risk measurement tools.</li>
              <li>Use of derivatives in risk management.</li>
              <li>Developing risk standards.</li>
              <li>Identifying the essential criteria for implementing risk management controls and procedures.</li>
              <li>Legal aspects(overview of regulations).</li>
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
};

export default FinanceConsulting;