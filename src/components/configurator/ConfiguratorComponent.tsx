import { motion, AnimatePresence } from 'framer-motion'
import { useState } from 'react'

interface ConfigOption {
  id: string
  name: string
  price: number
  image?: string
}

interface Config {
  model: ConfigOption
  color: ConfigOption
  battery: ConfigOption
  interior: ConfigOption
  wheels: ConfigOption
  autopilot: ConfigOption
}

const models: ConfigOption[] = [
  { id: 'urban-rider', name: 'Urban Rider', price: 29990 },
  { id: 'city-cruiser', name: 'City Cruiser', price: 39990 },
  { id: 'highway-master', name: 'Highway Master', price: 49990 },
]

const colors: ConfigOption[] = [
  { id: 'midnight-black', name: 'Midnight Black', price: 0 },
  { id: 'pearl-white', name: 'Pearl White', price: 1500 },
  { id: 'electric-blue', name: 'Electric Blue', price: 2000 },
  { id: 'silver-metallic', name: 'Silver Metallic', price: 1500 },
  { id: 'red-signature', name: 'Signature Red', price: 2500 },
]

const batteries: ConfigOption[] = [
  { id: 'standard', name: 'Standard Range (50 kWh)', price: 0 },
  { id: 'long-range', name: 'Long Range (65 kWh)', price: 8000 },
  { id: 'performance', name: 'Performance (75 kWh)', price: 12000 },
]

const interiors: ConfigOption[] = [
  { id: 'black-fabric', name: 'Black Fabric', price: 0 },
  { id: 'black-leather', name: 'Black Premium Leather', price: 3000 },
  { id: 'white-leather', name: 'White Premium Leather', price: 3500 },
]

const wheels: ConfigOption[] = [
  { id: '18-aero', name: '18" Aero Wheels', price: 0 },
  { id: '19-sport', name: '19" Sport Wheels', price: 2000 },
  { id: '20-performance', name: '20" Performance Wheels', price: 3500 },
]

const autopilots: ConfigOption[] = [
  { id: 'none', name: 'None', price: 0 },
  { id: 'basic', name: 'Basic Autopilot', price: 3000 },
  { id: 'full-self-driving', name: 'Full Self-Driving', price: 10000 },
]

const ConfiguratorComponent = () => {
  const [currentStep, setCurrentStep] = useState(0)
  const [config, setConfig] = useState<Config>({
    model: models[0],
    color: colors[0],
    battery: batteries[0],
    interior: interiors[0],
    wheels: wheels[0],
    autopilot: autopilots[0],
  })

  const steps = [
    { title: 'Model', key: 'model', options: models },
    { title: 'Color', key: 'color', options: colors },
    { title: 'Battery', key: 'battery', options: batteries },
    { title: 'Interior', key: 'interior', options: interiors },
    { title: 'Wheels', key: 'wheels', options: wheels },
    { title: 'Autopilot', key: 'autopilot', options: autopilots },
  ]

  const totalPrice = Object.values(config).reduce((sum, option) => sum + option.price, 0)

  const handleSelect = (stepKey: string, option: ConfigOption) => {
    setConfig({ ...config, [stepKey]: option })
  }

  const colorMap: Record<string, string> = {
    'midnight-black': 'bg-slate-950',
    'pearl-white': 'bg-white',
    'electric-blue': 'bg-blue-500',
    'silver-metallic': 'bg-slate-400',
    'red-signature': 'bg-red-600',
  }

  return (
    <div className="min-h-screen bg-slate-950 pt-24">
      <div className="container-custom py-12">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-center mb-12"
        >
          <h1 className="font-display text-4xl md:text-6xl font-bold mb-4">
            Configure Your <span className="gradient-text">Dream EV</span>
          </h1>
          <p className="text-slate-400 text-lg">
            Customize every detail to match your style and needs
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-3 gap-8">
          {/* Left: Configuration Options */}
          <div className="lg:col-span-2">
            {/* Steps Navigation */}
            <div className="mb-8 overflow-x-auto">
              <div className="flex space-x-4 pb-4">
                {steps.map((step, index) => (
                  <button
                    key={step.key}
                    onClick={() => setCurrentStep(index)}
                    className={`flex-shrink-0 px-6 py-3 rounded-full font-medium transition-all ${
                      currentStep === index
                        ? 'bg-electric-500 text-slate-950'
                        : 'bg-slate-800 text-slate-400 hover:bg-slate-700'
                    }`}
                  >
                    {step.title}
                  </button>
                ))}
              </div>
            </div>

            {/* Current Step Options */}
            <AnimatePresence mode="wait">
              <motion.div
                key={currentStep}
                initial={{ opacity: 0, x: 20 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: -20 }}
                transition={{ duration: 0.3 }}
                className="bg-slate-900/50 backdrop-blur-sm border border-slate-800 rounded-3xl p-8"
              >
                <h2 className="font-display text-2xl font-bold mb-6">
                  Choose {steps[currentStep].title}
                </h2>

                <div className={`grid ${steps[currentStep].key === 'color' ? 'grid-cols-2 md:grid-cols-3' : 'gap-4'}`}>
                  {steps[currentStep].options.map((option) => {
                    const isSelected = config[steps[currentStep].key as keyof Config].id === option.id

                    return steps[currentStep].key === 'color' ? (
                      // Color swatches
                      <motion.button
                        key={option.id}
                        onClick={() => handleSelect(steps[currentStep].key, option)}
                        whileHover={{ scale: 1.05 }}
                        whileTap={{ scale: 0.95 }}
                        className={`relative p-4 rounded-2xl border-2 transition-all ${
                          isSelected
                            ? 'border-electric-500 bg-electric-500/10'
                            : 'border-slate-700 hover:border-slate-600'
                        }`}
                      >
                        <div className={`w-full aspect-square rounded-xl ${colorMap[option.id]} mb-3 border border-slate-700`} />
                        <div className="text-sm font-medium mb-1">{option.name}</div>
                        <div className="text-xs text-slate-500">
                          {option.price > 0 ? `+$${option.price.toLocaleString()}` : 'Included'}
                        </div>
                      </motion.button>
                    ) : (
                      // Regular options
                      <motion.button
                        key={option.id}
                        onClick={() => handleSelect(steps[currentStep].key, option)}
                        whileHover={{ scale: 1.02 }}
                        whileTap={{ scale: 0.98 }}
                        className={`p-6 rounded-2xl border-2 text-left transition-all ${
                          isSelected
                            ? 'border-electric-500 bg-electric-500/10'
                            : 'border-slate-700 hover:border-slate-600'
                        }`}
                      >
                        <div className="flex items-start justify-between">
                          <div className="flex-1">
                            <div className="font-semibold mb-2">{option.name}</div>
                            <div className="text-sm text-slate-400">
                              {option.price > 0 ? `+$${option.price.toLocaleString()}` : 'Included'}
                            </div>
                          </div>
                          {isSelected && (
                            <div className="w-6 h-6 bg-electric-500 rounded-full flex items-center justify-center flex-shrink-0">
                              <svg className="w-4 h-4 text-slate-950" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M5 13l4 4L19 7" />
                              </svg>
                            </div>
                          )}
                        </div>
                      </motion.button>
                    )
                  })}
                </div>

                {/* Navigation Buttons */}
                <div className="flex items-center justify-between mt-8">
                  <button
                    onClick={() => setCurrentStep(Math.max(0, currentStep - 1))}
                    disabled={currentStep === 0}
                    className="px-6 py-3 bg-slate-800 text-white rounded-full hover:bg-slate-700 disabled:opacity-50 disabled:cursor-not-allowed transition-all"
                  >
                    ← Previous
                  </button>
                  <button
                    onClick={() => setCurrentStep(Math.min(steps.length - 1, currentStep + 1))}
                    disabled={currentStep === steps.length - 1}
                    className="px-6 py-3 bg-electric-500 text-slate-950 font-semibold rounded-full hover:bg-electric-400 disabled:opacity-50 disabled:cursor-not-allowed transition-all"
                  >
                    Next →
                  </button>
                </div>
              </motion.div>
            </AnimatePresence>
          </div>

          {/* Right: Summary */}
          <div className="lg:sticky lg:top-24 h-fit">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              className="bg-slate-900/50 backdrop-blur-sm border border-slate-800 rounded-3xl p-8"
            >
              <h3 className="font-display text-2xl font-bold mb-6">Your Configuration</h3>

              {/* Vehicle Visualization */}
              <div className="aspect-video bg-gradient-to-br from-slate-800 to-slate-900 rounded-2xl mb-6 flex items-center justify-center overflow-hidden">
                <div className="text-center">
                  <div className="text-6xl mb-2">⚡</div>
                  <div className="text-sm text-slate-500">{config.model.name}</div>
                  <div className={`w-12 h-12 mx-auto mt-4 rounded-full ${colorMap[config.color.id]} border-2 border-slate-700`} />
                </div>
              </div>

              {/* Selected Options */}
              <div className="space-y-4 mb-6">
                {Object.entries(config).map(([key, option]) => (
                  <div key={key} className="flex items-center justify-between text-sm">
                    <span className="text-slate-400 capitalize">{key}:</span>
                    <span className="font-medium">{option.name}</span>
                  </div>
                ))}
              </div>

              <div className="border-t border-slate-800 pt-6">
                <div className="flex items-baseline justify-between mb-6">
                  <span className="text-slate-400">Total Price</span>
                  <div className="text-right">
                    <div className="text-3xl font-bold gradient-text">
                      ${totalPrice.toLocaleString()}
                    </div>
                    <div className="text-xs text-slate-500 mt-1">Before taxes & fees</div>
                  </div>
                </div>

                <button className="w-full py-4 bg-electric-500 text-slate-950 font-bold rounded-full hover:bg-electric-400 transition-all mb-3">
                  Reserve Now
                </button>
                <button className="w-full py-4 bg-transparent border-2 border-slate-700 text-white font-semibold rounded-full hover:border-electric-500 transition-all">
                  Book Test Ride
                </button>
              </div>

              {/* Progress Indicator */}
              <div className="mt-6 pt-6 border-t border-slate-800">
                <div className="flex items-center justify-between text-sm mb-2">
                  <span className="text-slate-400">Configuration Progress</span>
                  <span className="text-electric-400 font-medium">
                    {currentStep + 1}/{steps.length}
                  </span>
                </div>
                <div className="h-2 bg-slate-800 rounded-full overflow-hidden">
                  <motion.div
                    initial={{ width: 0 }}
                    animate={{ width: `${((currentStep + 1) / steps.length) * 100}%` }}
                    className="h-full bg-gradient-to-r from-electric-500 to-electric-400"
                  />
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default ConfiguratorComponent
