import { useState } from 'react'
import { motion } from 'framer-motion'

const EMICalculator = () => {
  const [loanAmount, setLoanAmount] = useState(80000)
  const [interestRate, setInterestRate] = useState(9.5)
  const [tenure, setTenure] = useState(24)

  const calculateEMI = () => {
    const principal = loanAmount
    const ratePerMonth = interestRate / 12 / 100
    const numberOfMonths = tenure
    
    const emi = (principal * ratePerMonth * Math.pow(1 + ratePerMonth, numberOfMonths)) / 
                (Math.pow(1 + ratePerMonth, numberOfMonths) - 1)
    
    const totalAmount = emi * numberOfMonths
    const totalInterest = totalAmount - principal
    
    return {
      emi: Math.round(emi),
      totalInterest: Math.round(totalInterest),
      totalAmount: Math.round(totalAmount)
    }
  }

  const { emi, totalInterest, totalAmount } = calculateEMI()

  const fuelSavings = (tenure * 30 * 100 * 0.8) // 30 days, 100 rs/day fuel, 80% savings

  return (
    <section id="emi-calculator" className="py-24 bg-gradient-to-b from-gray-50 to-white">
      <div className="container-custom">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
            EMI & Savings Calculator
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Calculate your monthly EMI and see how much you save on fuel costs
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-12">
          {/* Calculator Controls */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="bg-white rounded-3xl p-8 shadow-xl"
          >
            <h3 className="text-2xl font-bold text-gray-900 mb-8">Loan Details</h3>
            
            <div className="space-y-8">
              {/* Loan Amount */}
              <div>
                <div className="flex justify-between mb-3">
                  <label className="text-gray-700 font-semibold">Loan Amount</label>
                  <span className="text-primary font-bold">₹{loanAmount.toLocaleString()}</span>
                </div>
                <input
                  type="range"
                  min="20000"
                  max="150000"
                  step="5000"
                  value={loanAmount}
                  onChange={(e) => setLoanAmount(Number(e.target.value))}
                  className="w-full h-2 bg-gray-200 rounded-lg appearance-none cursor-pointer accent-primary"
                />
                <div className="flex justify-between text-sm text-gray-500 mt-2">
                  <span>₹20k</span>
                  <span>₹150k</span>
                </div>
              </div>

              {/* Interest Rate */}
              <div>
                <div className="flex justify-between mb-3">
                  <label className="text-gray-700 font-semibold">Interest Rate (p.a.)</label>
                  <span className="text-primary font-bold">{interestRate}%</span>
                </div>
                <input
                  type="range"
                  min="7"
                  max="15"
                  step="0.5"
                  value={interestRate}
                  onChange={(e) => setInterestRate(Number(e.target.value))}
                  className="w-full h-2 bg-gray-200 rounded-lg appearance-none cursor-pointer accent-primary"
                />
                <div className="flex justify-between text-sm text-gray-500 mt-2">
                  <span>7%</span>
                  <span>15%</span>
                </div>
              </div>

              {/* Tenure */}
              <div>
                <div className="flex justify-between mb-3">
                  <label className="text-gray-700 font-semibold">Loan Tenure</label>
                  <span className="text-primary font-bold">{tenure} months</span>
                </div>
                <input
                  type="range"
                  min="6"
                  max="48"
                  step="6"
                  value={tenure}
                  onChange={(e) => setTenure(Number(e.target.value))}
                  className="w-full h-2 bg-gray-200 rounded-lg appearance-none cursor-pointer accent-primary"
                />
                <div className="flex justify-between text-sm text-gray-500 mt-2">
                  <span>6 months</span>
                  <span>48 months</span>
                </div>
              </div>
            </div>
          </motion.div>

          {/* Results */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="space-y-6"
          >
            {/* EMI Amount */}
            <div className="bg-gradient-to-br from-primary to-accent rounded-3xl p-8 text-white shadow-xl">
              <div className="text-lg mb-2 opacity-90">Monthly EMI</div>
              <div className="text-5xl font-bold mb-4">₹{emi.toLocaleString()}</div>
              <div className="flex items-center space-x-2 text-sm opacity-75">
                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
                <span>Easy EMI options available</span>
              </div>
            </div>

            {/* Breakdown */}
            <div className="bg-white rounded-3xl p-8 shadow-xl space-y-4">
              <div className="flex justify-between items-center pb-4 border-b border-gray-200">
                <span className="text-gray-600">Principal Amount</span>
                <span className="text-xl font-bold text-gray-900">₹{loanAmount.toLocaleString()}</span>
              </div>
              <div className="flex justify-between items-center pb-4 border-b border-gray-200">
                <span className="text-gray-600">Total Interest</span>
                <span className="text-xl font-bold text-orange-600">₹{totalInterest.toLocaleString()}</span>
              </div>
              <div className="flex justify-between items-center pb-4 border-b border-gray-200">
                <span className="text-gray-600">Total Amount</span>
                <span className="text-xl font-bold text-gray-900">₹{totalAmount.toLocaleString()}</span>
              </div>
              <div className="flex justify-between items-center pt-2">
                <span className="text-gray-600 flex items-center space-x-2">
                  <span>Fuel Savings</span>
                  <span className="text-xs bg-green-100 text-green-700 px-2 py-1 rounded-full">vs Petrol</span>
                </span>
                <span className="text-xl font-bold text-green-600">₹{Math.round(fuelSavings).toLocaleString()}</span>
              </div>
            </div>

            {/* Government Subsidy Info */}
            <div className="bg-blue-50 rounded-2xl p-6 border-2 border-blue-200">
              <div className="flex items-start space-x-3">
                <div className="w-10 h-10 bg-blue-500 rounded-full flex items-center justify-center flex-shrink-0">
                  <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                </div>
                <div>
                  <h4 className="font-bold text-blue-900 mb-1">Government Subsidies Available!</h4>
                  <p className="text-sm text-blue-800">Get up to ₹15,000 subsidy under FAME II scheme. Contact us for details.</p>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}

export default EMICalculator
