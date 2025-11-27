import { useState } from 'react'
import { motion } from 'framer-motion'
import { Calculator, TrendingDown, Fuel, BadgePercent } from 'lucide-react'

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
    <section id="emi-calculator" className="py-32 bg-white relative overflow-hidden">
      {/* Subtle grid background */}
      <div className="absolute inset-0 bg-[linear-gradient(rgba(0,0,0,0.02)_1px,transparent_1px),linear-gradient(90deg,rgba(0,0,0,0.02)_1px,transparent_1px)] bg-[size:100px_100px]" />
      
      <div className="relative max-w-[1400px] mx-auto px-8 md:px-16 lg:pl-32">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="mb-24 text-center"
        >
          <div className="flex items-center justify-center space-x-4 mb-6">
            <Calculator className="w-12 h-12 text-gray-400" strokeWidth={1} />
            <h2 className="font-light text-5xl md:text-7xl tracking-tight text-gray-900">
              EMI Calculator
            </h2>
          </div>
          <div className="w-16 h-px bg-black/20 mx-auto" />
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-16 items-start">
          {/* Calculator Controls */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="space-y-12"
          >
            {/* Loan Amount */}
            <div>
              <div className="flex justify-between items-baseline mb-6">
                <label className="text-gray-600 font-light text-sm uppercase tracking-widest">Loan Amount</label>
                <span className="font-light text-3xl text-gray-900">₹{loanAmount.toLocaleString()}</span>
              </div>
              <input
                type="range"
                min="20000"
                max="150000"
                step="5000"
                value={loanAmount}
                onChange={(e) => setLoanAmount(Number(e.target.value))}
                className="w-full h-px bg-gray-300 appearance-none cursor-pointer accent-black"
                style={{
                  background: `linear-gradient(to right, black 0%, black ${((loanAmount - 20000) / 130000) * 100}%, #d1d5db ${((loanAmount - 20000) / 130000) * 100}%, #d1d5db 100%)`
                }}
              />
              <div className="flex justify-between text-xs text-gray-400 mt-3 font-light">
                <span>₹20,000</span>
                <span>₹1,50,000</span>
              </div>
            </div>

            {/* Interest Rate */}
            <div>
              <div className="flex justify-between items-baseline mb-6">
                <label className="text-gray-600 font-light text-sm uppercase tracking-widest">Interest Rate</label>
                <span className="font-light text-3xl text-gray-900">{interestRate}%</span>
              </div>
              <input
                type="range"
                min="7"
                max="15"
                step="0.5"
                value={interestRate}
                onChange={(e) => setInterestRate(Number(e.target.value))}
                className="w-full h-px bg-gray-300 appearance-none cursor-pointer accent-black"
                style={{
                  background: `linear-gradient(to right, black 0%, black ${((interestRate - 7) / 8) * 100}%, #d1d5db ${((interestRate - 7) / 8) * 100}%, #d1d5db 100%)`
                }}
              />
              <div className="flex justify-between text-xs text-gray-400 mt-3 font-light">
                <span>7%</span>
                <span>15%</span>
              </div>
            </div>

            {/* Tenure */}
            <div>
              <div className="flex justify-between items-baseline mb-6">
                <label className="text-gray-600 font-light text-sm uppercase tracking-widest">Tenure</label>
                <span className="font-light text-3xl text-gray-900">{tenure} months</span>
              </div>
              <input
                type="range"
                min="6"
                max="48"
                step="6"
                value={tenure}
                onChange={(e) => setTenure(Number(e.target.value))}
                className="w-full h-px bg-gray-300 appearance-none cursor-pointer accent-black"
                style={{
                  background: `linear-gradient(to right, black 0%, black ${((tenure - 6) / 42) * 100}%, #d1d5db ${((tenure - 6) / 42) * 100}%, #d1d5db 100%)`
                }}
              />
              <div className="flex justify-between text-xs text-gray-400 mt-3 font-light">
                <span>6 months</span>
                <span>48 months</span>
              </div>
            </div>

            {/* Results Summary */}
            <div className="border-t border-gray-200 pt-12 space-y-8">
              <motion.div
                initial={{ opacity: 0, y: 10 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.2 }}
                className="group"
              >
                <div className="flex items-start justify-between">
                  <div className="flex items-center space-x-3">
                    <div className="w-10 h-10 border border-gray-200 flex items-center justify-center group-hover:border-gray-400 transition-colors duration-300">
                      <Calculator className="w-5 h-5 text-gray-400 group-hover:text-gray-900 transition-colors duration-300" strokeWidth={1} />
                    </div>
                    <span className="text-gray-600 text-xs uppercase tracking-widest">Monthly EMI</span>
                  </div>
                  <span className="font-light text-5xl text-gray-900">₹{emi.toLocaleString()}</span>
                </div>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, y: 10 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.3 }}
                className="group border-t border-gray-100 pt-8"
              >
                <div className="flex items-start justify-between">
                  <div className="flex items-center space-x-3">
                    <div className="w-10 h-10 border border-gray-200 flex items-center justify-center group-hover:border-gray-400 transition-colors duration-300">
                      <TrendingDown className="w-5 h-5 text-gray-400 group-hover:text-gray-900 transition-colors duration-300" strokeWidth={1} />
                    </div>
                    <span className="text-gray-600 text-xs uppercase tracking-widest">Total Interest</span>
                  </div>
                  <span className="font-light text-3xl text-gray-900">₹{totalInterest.toLocaleString()}</span>
                </div>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, y: 10 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.4 }}
                className="group border-t border-gray-100 pt-8"
              >
                <div className="flex items-start justify-between">
                  <div className="flex items-center space-x-3">
                    <div className="w-10 h-10 border border-gray-200 flex items-center justify-center group-hover:border-gray-400 transition-colors duration-300">
                      <Fuel className="w-5 h-5 text-gray-400 group-hover:text-gray-900 transition-colors duration-300" strokeWidth={1} />
                    </div>
                    <span className="text-gray-600 text-xs uppercase tracking-widest">Fuel Savings</span>
                  </div>
                  <span className="font-light text-3xl text-gray-900">₹{Math.round(fuelSavings).toLocaleString()}</span>
                </div>
              </motion.div>
            </div>
          </motion.div>

          {/* Vehicle Image */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="space-y-8"
          >
            <div className="aspect-[4/5] bg-gray-100 relative overflow-hidden group">
              <img
                src="/images/CD_EV15555.jpg"
                alt="Electric Vehicle"
                className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
              />
            </div>
            
            {/* Subsidy Badge */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.4 }}
              className="border border-gray-200 p-8 hover:border-gray-400 transition-colors duration-300"
            >
              <div className="flex items-center space-x-3 mb-6">
                <div className="w-12 h-12 border border-gray-200 flex items-center justify-center">
                  <BadgePercent className="w-6 h-6 text-gray-400" strokeWidth={1} />
                </div>
                <div className="text-xs uppercase tracking-widest text-gray-600 font-light">Government Subsidy</div>
              </div>
              <div className="font-light text-4xl mb-3 text-gray-900">Up to ₹15,000</div>
              <p className="text-gray-500 text-sm font-light leading-relaxed">Under FAME II scheme. Additional state subsidies may apply.</p>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}

export default EMICalculator
