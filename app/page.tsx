'use client'

import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Dumbbell, Users, Trophy, Heart, Clock, Star, CheckCircle, ArrowRight, Zap, Target, Flame, Shield, MapPin, Phone, Mail, Calendar, Award, TrendingUp, Activity, Sparkles, Crown, Diamond } from "lucide-react"

export default function Fusion24Website() {
  return (
    <div className="min-h-screen bg-black text-white overflow-hidden relative">
      {/* 3D Background Elements */}
      <div className="fixed inset-0 pointer-events-none">
        <div className="absolute top-20 left-20 w-96 h-96 bg-gradient-to-r from-orange-500/20 to-red-500/20 rounded-full blur-3xl animate-pulse transform rotate-45"></div>
        <div className="absolute bottom-20 right-20 w-80 h-80 bg-gradient-to-r from-yellow-500/15 to-orange-500/15 rounded-full blur-3xl animate-pulse delay-1000 transform -rotate-45"></div>
        <div className="absolute top-1/2 left-1/2 w-64 h-64 bg-gradient-to-r from-red-500/10 to-pink-500/10 rounded-full blur-3xl animate-pulse delay-2000 transform translate-x-1/2"></div>
      </div>

      {/* Header */}
      <header className="fixed top-0 w-full z-50 bg-black/95 backdrop-blur-2xl border-b border-orange-500/30 shadow-2xl">
        <div className="container mx-auto px-6 py-4">
          <div className="flex justify-between items-center">
            <div className="flex items-center space-x-4">
              <div className="relative group">
                <div className="w-16 h-16 bg-white/10 backdrop-blur-xl rounded-2xl flex items-center justify-center shadow-2xl transform group-hover:scale-110 transition-all duration-300 border border-orange-500/30">
                  <img src="/images.png" alt="Fusion24" width={60} height={60} className="rounded-xl object-contain" />
                </div>
                <div className="absolute -top-2 -right-2 w-6 h-6 bg-gradient-to-r from-yellow-400 to-orange-500 rounded-full animate-ping"></div>
                <div className="absolute -top-2 -right-2 w-6 h-6 bg-gradient-to-r from-yellow-400 to-orange-500 rounded-full"></div>
              </div>
              <div>
                <span className="text-3xl font-black tracking-tight bg-gradient-to-r from-white via-orange-200 to-white bg-clip-text text-transparent drop-shadow-lg">FUSION24</span>
                <div className="text-xs text-orange-400 font-bold tracking-widest flex items-center gap-1 drop-shadow-md">
                  <Crown className="h-3 w-3" />
                  PREMIUM FITNESS STUDIO
                  <Crown className="h-3 w-3" />
                </div>
              </div>
            </div>
            
            <nav className="hidden md:flex items-center space-x-10">
              {['PROGRAMS', 'TRAINERS', 'PRICING', 'SCHEDULE', 'FACILITIES'].map((item) => (
                <a key={item} href={`#${item.toLowerCase()}`} className="text-sm font-bold hover:text-orange-400 transition-all duration-300 relative group tracking-wide">
                  {item}
                  <span className="absolute -bottom-2 left-0 w-0 h-1 bg-gradient-to-r from-orange-500 to-red-500 group-hover:w-full transition-all duration-300 rounded-full"></span>
                </a>
              ))}
            </nav>

            <Button className="bg-gradient-to-r from-orange-500 via-red-500 to-orange-600 hover:from-orange-600 hover:via-red-600 hover:to-orange-700 text-white font-black px-8 py-3 rounded-2xl shadow-2xl hover:shadow-orange-500/50 transition-all duration-300 transform hover:scale-105 border border-orange-400/30">
              <Sparkles className="mr-2 h-5 w-5" />
              JOIN ELITE
            </Button>
          </div>
        </div>
      </header>

      {/* Hero Section */}
      <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
        {/* 3D Animated Background */}
        <div className="absolute inset-0 bg-gradient-to-br from-black via-gray-900 to-black">
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_30%_40%,rgba(249,115,22,0.15),transparent_50%)]"></div>
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_70%_60%,rgba(239,68,68,0.1),transparent_50%)]"></div>
        </div>

        {/* 3D Grid Pattern */}
        <div className="absolute inset-0 bg-[linear-gradient(rgba(249,115,22,0.05)_1px,transparent_1px),linear-gradient(90deg,rgba(249,115,22,0.05)_1px,transparent_1px)] bg-[size:60px_60px] animate-pulse"></div>

        {/* Floating 3D Elements */}
        <div className="absolute top-32 left-32 w-4 h-4 bg-orange-500 rounded-full animate-bounce delay-100"></div>
        <div className="absolute top-48 right-48 w-3 h-3 bg-red-500 rounded-full animate-bounce delay-300"></div>
        <div className="absolute bottom-32 left-48 w-5 h-5 bg-yellow-500 rounded-full animate-bounce delay-500"></div>

        <div className="relative z-10 container mx-auto px-6 text-center">
          <div className="mb-12">
            <div className="inline-flex items-center gap-3 bg-gradient-to-r from-orange-500/20 to-red-500/20 border border-orange-500/30 rounded-full px-8 py-4 mb-8 backdrop-blur-xl shadow-2xl">
              <Clock className="h-6 w-6 text-orange-400 animate-spin" />
              <span className="text-lg font-black text-orange-300 tracking-wide">24×7 PREMIUM FITNESS ECOSYSTEM</span>
              <Diamond className="h-6 w-6 text-orange-400 animate-pulse" />
            </div>
          </div>

          <h1 className="text-7xl md:text-9xl lg:text-[12rem] font-black mb-8 leading-none">
            <span className="bg-gradient-to-r from-white via-orange-100 to-white bg-clip-text text-transparent drop-shadow-2xl">
              TRAIN STRONG
            </span>
            <br />
            <span className="bg-gradient-to-r from-orange-400 via-red-500 to-yellow-500 bg-clip-text text-transparent animate-pulse">
              TRANSFORM SMART
            </span>
          </h1>

          <div className="max-w-6xl mx-auto mb-12">
            <p className="text-2xl md:text-3xl text-orange-200 mb-6 font-bold leading-relaxed">
              Premium fitness gym in <span className="text-orange-400 font-black">Iyyappanthangal</span> offering 
            </p>
            <div className="flex flex-wrap justify-center gap-4 text-xl md:text-2xl font-bold">
              {['Strength Training', 'Boxing', 'CrossFit', 'Bootcamp'].map((item, index) => (
                <span key={item} className="bg-gradient-to-r from-orange-500/20 to-red-500/20 border border-orange-500/30 px-6 py-3 rounded-2xl backdrop-blur-xl shadow-xl transform hover:scale-105 transition-all duration-300">
                  {item}
                </span>
              ))}
            </div>
          </div>

          <p className="text-xl text-gray-300 mb-16 max-w-4xl mx-auto leading-relaxed">
            Complete fitness ecosystem with <span className="text-orange-400 font-bold">certified expert trainers</span>, 
            recovery facilities, and long-term transformation programs
          </p>

          <div className="flex flex-col sm:flex-row gap-8 justify-center items-center mb-20">
            <Button size="lg" className="bg-gradient-to-r from-orange-500 via-red-500 to-orange-600 hover:from-orange-600 hover:via-red-600 hover:to-orange-700 text-white font-black px-16 py-8 text-2xl rounded-3xl shadow-2xl hover:shadow-orange-500/50 transition-all duration-300 transform hover:scale-110 border-2 border-orange-400/50">
              <Trophy className="mr-4 h-8 w-8" />
              BOOK FREE TRIAL
              <ArrowRight className="ml-4 h-8 w-8" />
            </Button>
            <Button 
              size="lg" 
              variant="outline" 
              onClick={() => window.open('https://www.google.com/maps/search/Fusion24+Gym+Iyyappanthangal', '_blank')}
              className="border-3 border-white/50 text-white hover:bg-white hover:text-black font-black px-16 py-8 text-2xl rounded-3xl backdrop-blur-xl transition-all duration-300 transform hover:scale-110 shadow-2xl bg-black/30"
            >
              <MapPin className="mr-4 h-8 w-8" />
              <span className="drop-shadow-lg">VISIT THE GYM</span>
            </Button>
          </div>

          {/* Enhanced Stats */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 max-w-5xl mx-auto">
            {[
              { number: "24/7", label: "Premium Access", icon: Clock },
              { number: "2000+", label: "Elite Members", icon: Users },
              { number: "15+", label: "Expert Programs", icon: Target },
              { number: "10+", label: "Certified Trainers", icon: Award }
            ].map((stat, index) => (
              <div key={index} className="bg-gradient-to-br from-gray-900/80 to-black/80 backdrop-blur-xl border border-orange-500/30 rounded-3xl p-8 text-center shadow-2xl transform hover:scale-105 transition-all duration-300">
                <stat.icon className="h-12 w-12 text-orange-400 mx-auto mb-4" />
                <div className="text-4xl font-black text-orange-400 mb-2">{stat.number}</div>
                <div className="text-sm text-gray-300 uppercase tracking-wide font-bold">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>

        {/* Enhanced Scroll Indicator */}
        <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2">
          <div className="w-8 h-12 border-3 border-orange-400/50 rounded-full flex justify-center backdrop-blur-xl bg-black/20">
            <div className="w-2 h-4 bg-gradient-to-b from-orange-400 to-red-500 rounded-full mt-2 animate-bounce"></div>
          </div>
        </div>
      </section>

      {/* Programs Section */}
      <section id="programs" className="py-32 relative">
        <div className="absolute inset-0 bg-gradient-to-b from-black via-gray-950 to-black"></div>
        <div className="relative z-10 container mx-auto px-6">
          <div className="text-center mb-20">
            <div className="inline-flex items-center gap-2 bg-orange-500/10 border border-orange-500/20 rounded-full px-6 py-3 mb-8">
              <Target className="h-5 w-5 text-orange-500" />
              <span className="text-sm font-semibold text-orange-400 uppercase tracking-wide">Training Programs</span>
            </div>
            <h2 className="text-5xl md:text-6xl font-black mb-6">
              <span className="bg-gradient-to-r from-white to-gray-300 bg-clip-text text-transparent">
                WORKOUT &
              </span>
              <br />
              <span className="bg-gradient-to-r from-orange-500 to-red-500 bg-clip-text text-transparent">
                TRAINING PROGRAMS
              </span>
            </h2>
            <p className="text-xl text-gray-400 max-w-3xl mx-auto">
              Expert-designed programs for every fitness level and goal
            </p>
          </div>

          <Tabs defaultValue="strength" className="w-full">
            <TabsList className="grid w-full grid-cols-3 lg:grid-cols-6 mb-12 bg-gray-900/50 backdrop-blur-sm border border-gray-800 rounded-2xl p-2">
              <TabsTrigger value="strength" className="data-[state=active]:bg-orange-500 data-[state=active]:text-white rounded-xl font-semibold">STRENGTH</TabsTrigger>
              <TabsTrigger value="boxing" className="data-[state=active]:bg-orange-500 data-[state=active]:text-white rounded-xl font-semibold">BOXING</TabsTrigger>
              <TabsTrigger value="crossfit" className="data-[state=active]:bg-orange-500 data-[state=active]:text-white rounded-xl font-semibold">CROSSFIT</TabsTrigger>
              <TabsTrigger value="bootcamp" className="data-[state=active]:bg-orange-500 data-[state=active]:text-white rounded-xl font-semibold">BOOTCAMP</TabsTrigger>
              <TabsTrigger value="functional" className="data-[state=active]:bg-orange-500 data-[state=active]:text-white rounded-xl font-semibold">FUNCTIONAL</TabsTrigger>
              <TabsTrigger value="cardio" className="data-[state=active]:bg-orange-500 data-[state=active]:text-white rounded-xl font-semibold">CARDIO</TabsTrigger>
            </TabsList>
            
            <TabsContent value="strength">
              <Card className="bg-gradient-to-br from-gray-900/80 to-black/80 backdrop-blur-xl border border-gray-800/50 rounded-3xl overflow-hidden">
                <div className="absolute inset-0 bg-gradient-to-br from-orange-500/5 to-transparent"></div>
                <CardHeader className="relative z-10 pb-8">
                  <div className="flex items-center justify-between mb-6">
                    <div className="flex items-center gap-4">
                      <div className="p-4 bg-orange-500/10 rounded-2xl border border-orange-500/20">
                        <Dumbbell className="h-8 w-8 text-orange-500" />
                      </div>
                      <div>
                        <CardTitle className="text-3xl font-black text-white mb-2">STRENGTH TRAINING</CardTitle>
                        <CardDescription className="text-lg text-gray-300">Build muscle mass, increase power, transform your physique</CardDescription>
                      </div>
                    </div>
                    <div className="text-right">
                      <div className="text-2xl font-black text-orange-500">ELITE</div>
                      <div className="text-sm text-gray-400">PROGRAM</div>
                    </div>
                  </div>
                </CardHeader>
                <CardContent className="relative z-10">
                  <div className="grid md:grid-cols-4 gap-6 mb-8">
                    <div className="bg-gray-800/30 rounded-2xl p-6 border border-gray-700/50">
                      <h4 className="font-bold text-white mb-4 flex items-center gap-2">
                        <Target className="h-5 w-5 text-orange-500" />
                        WHO IT'S FOR
                      </h4>
                      <ul className="space-y-2 text-sm text-gray-300">
                        <li>• Beginners to advanced</li>
                        <li>• Muscle building goals</li>
                        <li>• Strength improvement</li>
                        <li>• Body transformation</li>
                      </ul>
                    </div>
                    <div className="bg-gray-800/30 rounded-2xl p-6 border border-gray-700/50">
                      <h4 className="font-bold text-white mb-4 flex items-center gap-2">
                        <Calendar className="h-5 w-5 text-orange-500" />
                        FREQUENCY
                      </h4>
                      <ul className="space-y-2 text-sm text-gray-300">
                        <li>• 4-6 sessions per week</li>
                        <li>• 60-90 minutes each</li>
                        <li>• Progressive overload</li>
                        <li>• Rest day guidance</li>
                      </ul>
                    </div>
                    <div className="bg-gray-800/30 rounded-2xl p-6 border border-gray-700/50">
                      <h4 className="font-bold text-white mb-4 flex items-center gap-2">
                        <Zap className="h-5 w-5 text-orange-500" />
                        EQUIPMENT
                      </h4>
                      <ul className="space-y-2 text-sm text-gray-300">
                        <li>• Olympic barbells</li>
                        <li>• Cable machines</li>
                        <li>• Power racks</li>
                        <li>• Free weights</li>
                      </ul>
                    </div>
                    <div className="bg-gray-800/30 rounded-2xl p-6 border border-gray-700/50">
                      <h4 className="font-bold text-white mb-4 flex items-center gap-2">
                        <Trophy className="h-5 w-5 text-orange-500" />
                        EXPECTED RESULTS
                      </h4>
                      <ul className="space-y-2 text-sm text-gray-300">
                        <li>• 40%+ strength gains</li>
                        <li>• Muscle mass increase</li>
                        <li>• Better body composition</li>
                        <li>• Enhanced confidence</li>
                      </ul>
                    </div>
                  </div>
                  <Button className="bg-gradient-to-r from-orange-500 to-red-500 hover:from-orange-600 hover:to-red-600 text-white font-bold px-8 py-4 rounded-full shadow-lg hover:shadow-orange-500/25 transition-all duration-300">
                    START STRENGTH PROGRAM
                    <ArrowRight className="ml-2 h-5 w-5" />
                  </Button>
                </CardContent>
              </Card>
            </TabsContent>

            <TabsContent value="boxing">
              <Card className="bg-gradient-to-br from-gray-900/80 to-black/80 backdrop-blur-xl border border-gray-800/50 rounded-3xl overflow-hidden">
                <div className="absolute inset-0 bg-gradient-to-br from-orange-500/5 to-transparent"></div>
                <CardHeader className="relative z-10">
                  <CardTitle className="text-3xl font-black text-white flex items-center gap-4">
                    <div className="p-4 bg-orange-500/10 rounded-2xl border border-orange-500/20">
                      <Flame className="h-8 w-8 text-orange-500" />
                    </div>
                    BOXING TRAINING
                  </CardTitle>
                  <CardDescription className="text-lg text-gray-300">Learn technique, build cardio, develop mental toughness and self-defense skills</CardDescription>
                </CardHeader>
                <CardContent className="relative z-10">
                  <div className="grid md:grid-cols-2 gap-6 mb-6">
                    <div>
                      <h4 className="font-bold text-white mb-3">Training Focus:</h4>
                      <ul className="space-y-2 text-sm text-gray-300">
                        <li>• Technique & footwork fundamentals</li>
                        <li>• Pad work & sparring sessions</li>
                        <li>• Conditioning & cardio improvement</li>
                        <li>• Self-defense applications</li>
                      </ul>
                    </div>
                    <div>
                      <h4 className="font-bold text-white mb-3">Best For:</h4>
                      <ul className="space-y-2 text-sm text-gray-300">
                        <li>• Fat loss & conditioning</li>
                        <li>• Stress relief & confidence</li>
                        <li>• Coordination improvement</li>
                        <li>• Mental toughness building</li>
                      </ul>
                    </div>
                  </div>
                  <Button className="bg-gradient-to-r from-orange-500 to-red-500 hover:from-orange-600 hover:to-red-600 text-white font-bold px-8 py-4 rounded-full">
                    JOIN BOXING CLASSES
                  </Button>
                </CardContent>
              </Card>
            </TabsContent>

            <TabsContent value="crossfit">
              <Card className="bg-gradient-to-br from-gray-900/80 to-black/80 backdrop-blur-xl border border-gray-800/50 rounded-3xl">
                <CardHeader>
                  <CardTitle className="text-3xl font-black text-white">CROSSFIT TRAINING</CardTitle>
                  <CardDescription className="text-lg text-gray-300">High-intensity functional training focused on strength, endurance, and agility</CardDescription>
                </CardHeader>
                <CardContent>
                  <p className="text-gray-300 mb-6">Varied workouts combining weightlifting, cardio, and gymnastics movements for complete fitness transformation.</p>
                  <Button className="bg-gradient-to-r from-orange-500 to-red-500 hover:from-orange-600 hover:to-red-600 text-white font-bold px-8 py-4 rounded-full">
                    START CROSSFIT
                  </Button>
                </CardContent>
              </Card>
            </TabsContent>

            <TabsContent value="bootcamp">
              <Card className="bg-gradient-to-br from-gray-900/80 to-black/80 backdrop-blur-xl border border-gray-800/50 rounded-3xl">
                <CardHeader>
                  <CardTitle className="text-3xl font-black text-white">BOOTCAMP CLASSES</CardTitle>
                  <CardDescription className="text-lg text-gray-300">Group-based conditioning ideal for fat loss and stamina building</CardDescription>
                </CardHeader>
                <CardContent>
                  <p className="text-gray-300 mb-6">High-energy group workouts combining cardio, strength, and functional movements in a motivating environment.</p>
                  <Button className="bg-gradient-to-r from-orange-500 to-red-500 hover:from-orange-600 hover:to-red-600 text-white font-bold px-8 py-4 rounded-full">
                    JOIN BOOTCAMP
                  </Button>
                </CardContent>
              </Card>
            </TabsContent>

            <TabsContent value="functional">
              <Card className="bg-gradient-to-br from-gray-900/80 to-black/80 backdrop-blur-xl border border-gray-800/50 rounded-3xl">
                <CardHeader>
                  <CardTitle className="text-3xl font-black text-white">FUNCTIONAL TRAINING</CardTitle>
                  <CardDescription className="text-lg text-gray-300">Real-world movement patterns for daily life improvement</CardDescription>
                </CardHeader>
                <CardContent>
                  <Button className="bg-gradient-to-r from-orange-500 to-red-500 hover:from-orange-600 hover:to-red-600 text-white font-bold px-8 py-4 rounded-full">
                    START FUNCTIONAL
                  </Button>
                </CardContent>
              </Card>
            </TabsContent>

            <TabsContent value="cardio">
              <Card className="bg-gradient-to-br from-gray-900/80 to-black/80 backdrop-blur-xl border border-gray-800/50 rounded-3xl">
                <CardHeader>
                  <CardTitle className="text-3xl font-black text-white">CARDIO & FAT LOSS</CardTitle>
                  <CardDescription className="text-lg text-gray-300">Targeted programs for weight loss and cardiovascular health</CardDescription>
                </CardHeader>
                <CardContent>
                  <Button className="bg-gradient-to-r from-orange-500 to-red-500 hover:from-orange-600 hover:to-red-600 text-white font-bold px-8 py-4 rounded-full">
                    START CARDIO PROGRAM
                  </Button>
                </CardContent>
              </Card>
            </TabsContent>
          </Tabs>
        </div>
      </section>

      {/* Schedule & Timings Section */}
      <section id="schedule" className="py-32 relative">
        <div className="absolute inset-0 bg-gradient-to-b from-black via-gray-950 to-black"></div>
        <div className="relative z-10 container mx-auto px-6">
          <div className="text-center mb-20">
            <div className="inline-flex items-center gap-2 bg-orange-500/10 border border-orange-500/20 rounded-full px-6 py-3 mb-8">
              <Clock className="h-5 w-5 text-orange-500" />
              <span className="text-sm font-semibold text-orange-400 uppercase tracking-wide">Schedule & Timings</span>
            </div>
            <h2 className="text-5xl md:text-6xl font-black mb-6">
              <span className="bg-gradient-to-r from-white to-gray-300 bg-clip-text text-transparent">
                TRAIN ON YOUR
              </span>
              <br />
              <span className="bg-gradient-to-r from-orange-500 to-red-500 bg-clip-text text-transparent">
                SCHEDULE
              </span>
            </h2>
            <p className="text-xl text-gray-400 max-w-3xl mx-auto">
              Flexible timings and structured classes to fit your lifestyle
            </p>
          </div>

          <div className="grid lg:grid-cols-2 gap-12 max-w-6xl mx-auto">
            {/* Operating Hours */}
            <Card className="bg-gradient-to-br from-gray-900/80 to-black/80 backdrop-blur-xl border border-gray-800/50 rounded-3xl">
              <CardHeader>
                <CardTitle className="text-3xl font-black text-white flex items-center gap-3">
                  <Clock className="h-8 w-8 text-orange-500" />
                  GYM HOURS
                </CardTitle>
                <CardDescription className="text-lg text-gray-300">Open early morning to late night for your convenience</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  <div className="flex justify-between items-center p-4 bg-gray-800/30 rounded-xl">
                    <span className="text-white font-semibold">Monday - Friday</span>
                    <span className="text-orange-400 font-bold">5:00 AM - 11:00 PM</span>
                  </div>
                  <div className="flex justify-between items-center p-4 bg-gray-800/30 rounded-xl">
                    <span className="text-white font-semibold">Saturday</span>
                    <span className="text-orange-400 font-bold">5:00 AM - 10:00 PM</span>
                  </div>
                  <div className="flex justify-between items-center p-4 bg-gray-800/30 rounded-xl">
                    <span className="text-white font-semibold">Sunday</span>
                    <span className="text-orange-400 font-bold">6:00 AM - 9:00 PM</span>
                  </div>
                </div>
              </CardContent>
            </Card>

            {/* Class Schedule */}
            <Card className="bg-gradient-to-br from-gray-900/80 to-black/80 backdrop-blur-xl border border-gray-800/50 rounded-3xl">
              <CardHeader>
                <CardTitle className="text-3xl font-black text-white flex items-center gap-3">
                  <Calendar className="h-8 w-8 text-orange-500" />
                  CLASS SCHEDULE
                </CardTitle>
                <CardDescription className="text-lg text-gray-300">Structured group classes throughout the week</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  <div className="p-4 bg-gray-800/30 rounded-xl">
                    <div className="flex justify-between items-center mb-2">
                      <span className="text-orange-400 font-bold">BOXING</span>
                      <span className="text-gray-400 text-sm">Mon, Wed, Fri</span>
                    </div>
                    <div className="text-white">6:00 PM - 7:00 PM</div>
                  </div>
                  <div className="p-4 bg-gray-800/30 rounded-xl">
                    <div className="flex justify-between items-center mb-2">
                      <span className="text-orange-400 font-bold">CROSSFIT</span>
                      <span className="text-gray-400 text-sm">Tue, Thu, Sat</span>
                    </div>
                    <div className="text-white">7:00 AM - 8:00 AM & 6:00 PM - 7:00 PM</div>
                  </div>
                  <div className="p-4 bg-gray-800/30 rounded-xl">
                    <div className="flex justify-between items-center mb-2">
                      <span className="text-orange-400 font-bold">BOOTCAMP</span>
                      <span className="text-gray-400 text-sm">Daily</span>
                    </div>
                    <div className="text-white">6:00 AM - 7:00 AM & 7:00 PM - 8:00 PM</div>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>

          {/* Location */}
          <div className="mt-16 max-w-4xl mx-auto">
            <Card className="bg-gradient-to-br from-gray-900/80 to-black/80 backdrop-blur-xl border border-gray-800/50 rounded-3xl">
              <CardHeader className="text-center">
                <CardTitle className="text-3xl font-black text-white flex items-center justify-center gap-3">
                  <MapPin className="h-8 w-8 text-orange-500" />
                  LOCATION & ACCESSIBILITY
                </CardTitle>
                <CardDescription className="text-lg text-gray-300">Conveniently located in Iyyappanthangal</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="grid md:grid-cols-2 gap-8">
                  <div>
                    <h4 className="font-bold text-white mb-4">ADDRESS</h4>
                    <p className="text-gray-300 mb-4">
                      Fusion24 Fitness Gym<br />
                      Iyyappanthangal Main Road<br />
                      Near Major Hospitals<br />
                      Chennai, Tamil Nadu
                    </p>
                    <div className="space-y-2">
                      <div className="flex items-center gap-2">
                        <Phone className="h-4 w-4 text-orange-500" />
                        <span className="text-gray-300">+91 98765 43210</span>
                      </div>
                      <div className="flex items-center gap-2">
                        <Mail className="h-4 w-4 text-orange-500" />
                        <span className="text-gray-300">info@fusion24gym.com</span>
                      </div>
                    </div>
                  </div>
                  <div>
                    <h4 className="font-bold text-white mb-4">NEARBY LANDMARKS</h4>
                    <ul className="space-y-2 text-gray-300">
                      <li>• 2 min from Iyyappanthangal Bus Stop</li>
                      <li>• Near Apollo Hospital</li>
                      <li>• Close to major residential areas</li>
                      <li>• Easy parking available</li>
                    </ul>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Certified Trainers Section */}
      <section id="trainers" className="py-32 relative">
        <div className="absolute inset-0 bg-gradient-to-b from-black via-gray-950 to-black"></div>
        <div className="relative z-10 container mx-auto px-6">
          <div className="text-center mb-20">
            <div className="inline-flex items-center gap-3 bg-gradient-to-r from-orange-500/20 to-red-500/20 border border-orange-500/30 rounded-full px-8 py-4 mb-8 backdrop-blur-xl shadow-2xl">
              <Award className="h-6 w-6 text-orange-400" />
              <span className="text-lg font-black text-orange-300 tracking-wide">CERTIFIED EXPERT TRAINERS</span>
              <Trophy className="h-6 w-6 text-orange-400" />
            </div>
            <h2 className="text-6xl md:text-8xl font-black mb-8">
              <span className="bg-gradient-to-r from-white to-gray-300 bg-clip-text text-transparent">
                WORLD-CLASS
              </span>
              <br />
              <span className="bg-gradient-to-r from-orange-500 to-red-500 bg-clip-text text-transparent">
                COACHING TEAM
              </span>
            </h2>
            <p className="text-2xl text-gray-300 max-w-4xl mx-auto leading-relaxed">
              Our trainers hold <span className="text-orange-400 font-bold">international certifications</span> and have transformed thousands of lives
            </p>
          </div>

          {/* Certification Badges */}
          <div className="grid md:grid-cols-4 gap-6 mb-16 max-w-6xl mx-auto">
            {[
              { cert: "NASM-CPT", desc: "National Academy of Sports Medicine" },
              { cert: "ACSM", desc: "American College of Sports Medicine" },
              { cert: "CF-L2", desc: "CrossFit Level 2 Trainer" },
              { cert: "FMS", desc: "Functional Movement Screen" }
            ].map((cert, index) => (
              <div key={index} className="bg-gradient-to-br from-gray-900/80 to-black/80 backdrop-blur-xl border border-orange-500/30 rounded-2xl p-6 text-center shadow-2xl transform hover:scale-105 transition-all duration-300">
                <div className="w-16 h-16 bg-gradient-to-r from-orange-500 to-red-500 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Award className="h-8 w-8 text-white" />
                </div>
                <h4 className="font-black text-orange-400 text-xl mb-2">{cert.cert}</h4>
                <p className="text-sm text-gray-400">{cert.desc}</p>
              </div>
            ))}
          </div>

          <div className="grid md:grid-cols-3 gap-8 mb-20">
            {[
              {
                name: "RAJESH KUMAR",
                specialty: "Strength & Bodybuilding Expert",
                experience: "8+ Years Elite Training",
                certifications: ["NASM-CPT", "ACSM Certified", "Nutrition Specialist"],
                philosophy: "Progressive overload with perfect form for maximum results",
                rating: 4.9,
                achievements: ["500+ Transformations", "National Bodybuilding Judge", "Sports Nutrition Expert"],
                image: "👨‍💪"
              },
              {
                name: "PRIYA SHARMA",
                specialty: "Boxing & Combat Sports Master",
                experience: "6+ Years Professional Boxing",
                certifications: ["Boxing Coach Level 2", "Kickboxing Instructor", "Self-Defense Expert"],
                philosophy: "Technique first, power follows - building champions inside and out",
                rating: 5.0,
                achievements: ["Former State Champion", "300+ Students Trained", "Women's Self-Defense Specialist"],
                image: "👩‍🥊"
              },
              {
                name: "VIKRAM SINGH",
                specialty: "CrossFit & Functional Training",
                experience: "10+ Years CrossFit Coaching",
                certifications: ["CF-L2 Trainer", "FMS Certified", "Olympic Lifting Coach"],
                philosophy: "Functional movement for life - preparing you for everything",
                rating: 4.8,
                achievements: ["CrossFit Games Qualifier", "1000+ Athletes Coached", "Mobility Specialist"],
                image: "👨‍🏋️"
              }
            ].map((trainer, index) => (
              <Card key={index} className="bg-gradient-to-br from-gray-900/90 to-black/90 backdrop-blur-xl border-2 border-orange-500/30 rounded-3xl overflow-hidden group hover:border-orange-400/60 transition-all duration-500 shadow-2xl transform hover:scale-105">
                <div className="absolute inset-0 bg-gradient-to-br from-orange-500/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                
                <CardHeader className="relative z-10 text-center pb-6">
                  <div className="text-6xl mb-4">{trainer.image}</div>
                  <div className="flex items-center justify-center gap-2 mb-4">
                    <div className="flex items-center gap-1">
                      {[...Array(5)].map((_, i) => (
                        <Star key={i} className={`h-5 w-5 ${i < Math.floor(trainer.rating) ? 'fill-orange-500 text-orange-500' : 'text-gray-600'}`} />
                      ))}
                      <span className="text-lg font-bold text-orange-400 ml-2">{trainer.rating}</span>
                    </div>
                    <div className="px-4 py-2 bg-gradient-to-r from-orange-500/20 to-red-500/20 border border-orange-500/30 rounded-full">
                      <span className="text-sm font-black text-orange-300">CERTIFIED EXPERT</span>
                    </div>
                  </div>
                  <CardTitle className="text-3xl font-black text-white mb-3">{trainer.name}</CardTitle>
                  <CardDescription className="text-orange-400 font-bold text-xl mb-2">{trainer.specialty}</CardDescription>
                  <div className="text-gray-300 font-semibold">{trainer.experience}</div>
                </CardHeader>
                
                <CardContent className="relative z-10 space-y-6">
                  <div>
                    <h4 className="text-white font-bold mb-3 flex items-center gap-2">
                      <Award className="h-5 w-5 text-orange-400" />
                      CERTIFICATIONS
                    </h4>
                    <div className="flex flex-wrap gap-2">
                      {trainer.certifications.map((cert, i) => (
                        <span key={i} className="bg-orange-500/20 border border-orange-500/30 px-3 py-1 rounded-full text-sm font-semibold text-orange-300">
                          {cert}
                        </span>
                      ))}
                    </div>
                  </div>
                  
                  <div>
                    <h4 className="text-white font-bold mb-3 flex items-center gap-2">
                      <Trophy className="h-5 w-5 text-orange-400" />
                      ACHIEVEMENTS
                    </h4>
                    <ul className="space-y-2">
                      {trainer.achievements.map((achievement, i) => (
                        <li key={i} className="text-gray-300 text-sm flex items-center gap-2">
                          <CheckCircle className="h-4 w-4 text-orange-400 flex-shrink-0" />
                          {achievement}
                        </li>
                      ))}
                    </ul>
                  </div>
                  
                  <div>
                    <h4 className="text-white font-bold mb-3 flex items-center gap-2">
                      <Heart className="h-5 w-5 text-orange-400" />
                      TRAINING PHILOSOPHY
                    </h4>
                    <p className="text-gray-300 italic leading-relaxed">"{trainer.philosophy}"</p>
                  </div>
                  
                  <div className="flex gap-3 pt-4">
                    <Button className="flex-1 bg-gradient-to-r from-orange-500 to-red-500 hover:from-orange-600 hover:to-red-600 text-white font-black rounded-2xl py-3 shadow-xl">
                      BOOK SESSION
                    </Button>
                    <Button variant="outline" className="border-2 border-orange-500/50 text-orange-400 hover:bg-orange-500 hover:text-white rounded-2xl px-6">
                      VIEW PROFILE
                    </Button>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>

          {/* Training Methodology */}
          <div className="max-w-6xl mx-auto">
            <Card className="bg-gradient-to-br from-gray-900/90 to-black/90 backdrop-blur-xl border-2 border-orange-500/30 rounded-3xl shadow-2xl">
              <CardHeader className="text-center">
                <CardTitle className="text-4xl font-black text-white mb-4">OUR TRAINING METHODOLOGY</CardTitle>
                <CardDescription className="text-xl text-gray-300">Science-based approach to fitness transformation</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="grid md:grid-cols-4 gap-8">
                  {[
                    { step: "1", title: "ASSESSMENT", desc: "Comprehensive fitness evaluation and goal analysis", icon: Target },
                    { step: "2", title: "CUSTOM PLAN", desc: "Personalized workout and nutrition program design", icon: Zap },
                    { step: "3", title: "EXPERT COACHING", desc: "One-on-one guidance with certified trainers", icon: Users },
                    { step: "4", title: "PROGRESS TRACKING", desc: "Regular assessments and program optimization", icon: TrendingUp }
                  ].map((item, index) => (
                    <div key={index} className="text-center p-6 bg-gradient-to-br from-orange-500/10 to-red-500/10 rounded-2xl border border-orange-500/20">
                      <div className="w-20 h-20 bg-gradient-to-r from-orange-500 to-red-500 rounded-full flex items-center justify-center mx-auto mb-4 shadow-xl">
                        <span className="text-3xl font-black text-white">{item.step}</span>
                      </div>
                      <item.icon className="h-8 w-8 text-orange-400 mx-auto mb-3" />
                      <h4 className="font-black text-white mb-3 text-lg">{item.title}</h4>
                      <p className="text-gray-400 text-sm leading-relaxed">{item.desc}</p>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Enhanced Pricing Section */}
      <section id="pricing" className="py-32 relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-b from-black via-gray-950 to-black"></div>
        
        {/* 3D Background Elements */}
        <div className="absolute top-20 left-20 w-96 h-96 bg-gradient-to-r from-orange-500/10 to-red-500/10 rounded-full blur-3xl animate-pulse transform rotate-45"></div>
        <div className="absolute bottom-20 right-20 w-80 h-80 bg-gradient-to-r from-yellow-500/10 to-orange-500/10 rounded-full blur-3xl animate-pulse delay-1000 transform -rotate-45"></div>
        
        <div className="relative z-10 container mx-auto px-6">
          <div className="text-center mb-20">
            <div className="inline-flex items-center gap-3 bg-gradient-to-r from-orange-500/20 to-red-500/20 border border-orange-500/30 rounded-full px-8 py-4 mb-8 backdrop-blur-xl shadow-2xl">
              <Diamond className="h-6 w-6 text-orange-400" />
              <span className="text-lg font-black text-orange-300 tracking-wide">PREMIUM MEMBERSHIP PLANS</span>
              <Crown className="h-6 w-6 text-orange-400" />
            </div>
            <h2 className="text-6xl md:text-8xl font-black mb-8">
              <span className="bg-gradient-to-r from-white to-gray-300 bg-clip-text text-transparent">
                TRANSPARENT
              </span>
              <br />
              <span className="bg-gradient-to-r from-orange-500 to-red-500 bg-clip-text text-transparent">
                PRICING
              </span>
            </h2>
            <p className="text-2xl text-gray-300 max-w-4xl mx-auto leading-relaxed">
              Premium value packages with <span className="text-orange-400 font-bold">no hidden costs</span> - invest in your transformation
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8 max-w-7xl mx-auto mb-20">
            {[
              {
                name: "3-MONTH STARTER",
                price: "₹6,000",
                period: "3 months",
                monthlyPrice: "₹2,000/month",
                description: "Perfect for fitness beginners",
                features: [
                  "Full gym access (24/7)",
                  "CrossFit training included",
                  "Bootcamp workouts",
                  "Boxing sessions",
                  "Free steam bath access",
                  "Basic diet guidance",
                  "Nutrition support",
                  "Locker facility",
                  "Progress tracking"
                ],
                popular: false,
                savings: null,
                badge: "STARTER"
              },
              {
                name: "6-MONTH PREMIUM",
                price: "₹8,000",
                period: "6 months",
                monthlyPrice: "₹1,333/month",
                description: "Best value for serious transformation",
                features: [
                  "Everything in 3-Month plan",
                  "Unlimited gym access",
                  "All CrossFit programs",
                  "Advanced bootcamp training",
                  "Professional boxing coaching",
                  "Extended diet guidance",
                  "Personal nutrition consultation",
                  "Progress tracking & analysis",
                  "Trainer support included",
                  "Priority class booking",
                  "Guest pass (2 per month)"
                ],
                popular: true,
                savings: "Save ₹4,000",
                badge: "MOST POPULAR"
              },
              {
                name: "1-YEAR ELITE",
                price: "₹10,500",
                period: "12 months",
                monthlyPrice: "₹875/month",
                description: "Ultimate transformation package",
                features: [
                  "Everything in 6-Month plan",
                  "Complete gym ecosystem access",
                  "All training programs included",
                  "CrossFit, bootcamp, boxing mastery",
                  "Unlimited steam bath access",
                  "Continuous nutrition support",
                  "Advanced diet optimization",
                  "Comprehensive health tracking",
                  "Expert guidance & mentoring",
                  "Priority equipment access",
                  "Unlimited guest passes",
                  "Exclusive member events",
                  "Best value guarantee"
                ],
                popular: false,
                savings: "Save ₹13,500",
                badge: "BEST VALUE"
              }
            ].map((plan, index) => (
              <Card key={index} className={`relative overflow-hidden transform transition-all duration-500 hover:scale-105 ${
                plan.popular 
                  ? 'border-3 border-orange-500 scale-110 shadow-2xl shadow-orange-500/30' 
                  : 'border-2 border-gray-800/50 hover:border-orange-500/50'
              } bg-gradient-to-br from-gray-900/95 to-black/95 backdrop-blur-xl rounded-3xl`}>
                
                {/* 3D Glow Effect */}
                <div className={`absolute inset-0 bg-gradient-to-br ${
                  plan.popular 
                    ? 'from-orange-500/20 to-red-500/20' 
                    : 'from-orange-500/5 to-transparent'
                } opacity-0 group-hover:opacity-100 transition-opacity duration-500`}></div>

                {plan.popular && (
                  <div className="absolute -top-6 left-1/2 transform -translate-x-1/2 z-20">
                    <div className="bg-gradient-to-r from-orange-500 via-red-500 to-orange-600 text-white px-8 py-3 rounded-full text-lg font-black shadow-2xl border-2 border-orange-400/50">
                      <Crown className="inline h-5 w-5 mr-2" />
                      {plan.badge}
                      <Crown className="inline h-5 w-5 ml-2" />
                    </div>
                  </div>
                )}

                {!plan.popular && (
                  <div className="absolute -top-4 left-1/2 transform -translate-x-1/2 z-20">
                    <div className="bg-gradient-to-r from-gray-700 to-gray-800 text-white px-6 py-2 rounded-full text-sm font-bold shadow-xl">
                      {plan.badge}
                    </div>
                  </div>
                )}
                
                <CardHeader className="relative z-10 text-center pt-12 pb-8">
                  <div className="mb-6">
                    <div className="text-lg font-black text-orange-400 uppercase tracking-wide mb-3">{plan.name}</div>
                    <div className="text-6xl font-black text-white mb-3">{plan.price}</div>
                    <div className="text-gray-400 text-lg mb-2">{plan.period}</div>
                    <div className="text-2xl text-orange-400 font-bold mb-2">{plan.monthlyPrice}</div>
                    {plan.savings && (
                      <div className="inline-block bg-green-500/20 border border-green-500/30 px-4 py-2 rounded-full">
                        <span className="text-green-400 font-bold text-sm">{plan.savings}</span>
                      </div>
                    )}
                    <div className="text-gray-500 mt-3 text-lg">{plan.description}</div>
                  </div>
                </CardHeader>
                
                <CardContent className="relative z-10 px-8 pb-8">
                  <ul className="space-y-4 mb-8">
                    {plan.features.map((feature, featureIndex) => (
                      <li key={featureIndex} className="flex items-start gap-3">
                        <CheckCircle className="h-6 w-6 text-orange-500 flex-shrink-0 mt-0.5" />
                        <span className="text-gray-300 leading-relaxed">{feature}</span>
                      </li>
                    ))}
                  </ul>
                  
                  <Button 
                    className={`w-full py-6 rounded-2xl font-black text-xl transition-all duration-300 transform hover:scale-105 ${
                      plan.popular 
                        ? 'bg-gradient-to-r from-orange-500 via-red-500 to-orange-600 hover:from-orange-600 hover:via-red-600 hover:to-orange-700 text-white shadow-2xl hover:shadow-orange-500/50 border-2 border-orange-400/50' 
                        : 'border-3 border-orange-500/50 text-orange-400 hover:bg-gradient-to-r hover:from-orange-500 hover:to-red-500 hover:text-white bg-transparent hover:border-orange-400'
                    }`}
                  >
                    {plan.popular ? (
                      <>
                        <Crown className="mr-3 h-6 w-6" />
                        CHOOSE PREMIUM
                        <Crown className="ml-3 h-6 w-6" />
                      </>
                    ) : (
                      <>
                        <Trophy className="mr-3 h-6 w-6" />
                        SELECT PLAN
                      </>
                    )}
                  </Button>
                </CardContent>
              </Card>
            ))}
          </div>

          {/* Value Proposition */}
          <div className="max-w-6xl mx-auto">
            <Card className="bg-gradient-to-br from-gray-900/95 to-black/95 backdrop-blur-xl border-2 border-orange-500/30 rounded-3xl shadow-2xl">
              <CardHeader className="text-center">
                <CardTitle className="text-4xl font-black text-white mb-4">
                  COMPLETE FITNESS ECOSYSTEM
                </CardTitle>
                <CardDescription className="text-xl text-gray-300">Every membership includes access to our premium facilities and services</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="grid md:grid-cols-4 gap-8 text-center">
                  {[
                    { icon: Dumbbell, title: "PREMIUM TRAINING", desc: "Access to all equipment, programs, and training areas with expert guidance" },
                    { icon: Heart, title: "RECOVERY & WELLNESS", desc: "Steam bath, recovery zones, and wellness facilities for complete rejuvenation" },
                    { icon: Target, title: "EXPERT GUIDANCE", desc: "Nutrition support, diet planning, and certified trainer coaching" },
                    { icon: Shield, title: "GUARANTEED RESULTS", desc: "Proven transformation programs with money-back satisfaction guarantee" }
                  ].map((item, index) => (
                    <div key={index} className="p-8 bg-gradient-to-br from-orange-500/10 to-red-500/10 rounded-2xl border border-orange-500/20 transform hover:scale-105 transition-all duration-300">
                      <div className="w-20 h-20 bg-gradient-to-r from-orange-500 to-red-500 rounded-full flex items-center justify-center mx-auto mb-6 shadow-xl">
                        <item.icon className="h-10 w-10 text-white" />
                      </div>
                      <h4 className="font-black text-white mb-4 text-lg">{item.title}</h4>
                      <p className="text-gray-400 leading-relaxed">{item.desc}</p>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Facilities Section */}
      <section id="facilities" className="py-32 relative">
        <div className="absolute inset-0 bg-gradient-to-b from-black via-gray-950 to-black"></div>
        <div className="relative z-10 container mx-auto px-6">
          <div className="text-center mb-20">
            <div className="inline-flex items-center gap-2 bg-orange-500/10 border border-orange-500/20 rounded-full px-6 py-3 mb-8">
              <Shield className="h-5 w-5 text-orange-500" />
              <span className="text-sm font-semibold text-orange-400 uppercase tracking-wide">Premium Facilities</span>
            </div>
            <h2 className="text-5xl md:text-6xl font-black mb-6">
              <span className="bg-gradient-to-r from-white to-gray-300 bg-clip-text text-transparent">
                WORLD-CLASS
              </span>
              <br />
              <span className="bg-gradient-to-r from-orange-500 to-red-500 bg-clip-text text-transparent">
                FACILITIES
              </span>
            </h2>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              {
                icon: <Dumbbell className="h-10 w-10" />,
                title: "MODERN EQUIPMENT",
                description: "Latest strength machines, free weights, and cardio equipment from top brands"
              },
              {
                icon: <Heart className="h-10 w-10" />,
                title: "FREE STEAM BATH",
                description: "Complimentary steam bath access for recovery and relaxation after workouts"
              },
              {
                icon: <Flame className="h-10 w-10" />,
                title: "BOXING AREA",
                description: "Dedicated boxing zone with heavy bags, speed bags, and training equipment"
              },
              {
                icon: <Trophy className="h-10 w-10" />,
                title: "CROSSFIT RIGS",
                description: "Professional CrossFit setup with pull-up bars, Olympic platforms, and functional equipment"
              }
            ].map((facility, index) => (
              <Card key={index} className="bg-gradient-to-br from-gray-900/80 to-black/80 backdrop-blur-xl border border-gray-800/50 rounded-3xl text-center group hover:border-orange-500/30 transition-all duration-300">
                <div className="absolute inset-0 bg-gradient-to-br from-orange-500/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                <CardHeader className="relative z-10">
                  <div className="mx-auto text-orange-500 mb-6 p-4 bg-orange-500/10 rounded-2xl border border-orange-500/20 w-fit">
                    {facility.icon}
                  </div>
                  <CardTitle className="text-xl font-black text-white mb-4">{facility.title}</CardTitle>
                </CardHeader>
                <CardContent className="relative z-10">
                  <p className="text-gray-400 leading-relaxed">{facility.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="py-32 relative">
        <div className="absolute inset-0 bg-gradient-to-b from-black via-gray-950 to-black"></div>
        <div className="relative z-10 container mx-auto px-6">
          <div className="text-center mb-20">
            <h2 className="text-5xl md:text-6xl font-black mb-6">
              <span className="bg-gradient-to-r from-white to-gray-300 bg-clip-text text-transparent">
                TRANSFORMATION
              </span>
              <br />
              <span className="bg-gradient-to-r from-orange-500 to-red-500 bg-clip-text text-transparent">
                STORIES
              </span>
            </h2>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {[
              {
                name: "ARJUN PATEL",
                result: "Lost 18 kg in 5 months",
                quote: "The bootcamp program at Fusion24 completely changed my life. The trainers pushed me beyond my limits and the results speak for themselves.",
                program: "Bootcamp + Nutrition"
              },
              {
                name: "SNEHA REDDY",
                result: "Gained 8 kg muscle mass",
                quote: "Rajesh's strength training program helped me build the physique I always wanted. The systematic approach and expert guidance made all the difference.",
                program: "Strength Training"
              },
              {
                name: "KARTHIK KUMAR",
                result: "Completed first triathlon",
                quote: "The CrossFit and cardio programs prepared me for my first triathlon. I never thought I could achieve this level of fitness!",
                program: "CrossFit + Cardio"
              }
            ].map((testimonial, index) => (
              <Card key={index} className="bg-gradient-to-br from-gray-900/80 to-black/80 backdrop-blur-xl border border-gray-800/50 rounded-3xl">
                <CardHeader>
                  <div className="flex items-center gap-1 mb-4">
                    {[...Array(5)].map((_, i) => (
                      <Star key={i} className="h-5 w-5 fill-orange-500 text-orange-500" />
                    ))}
                  </div>
                  <CardTitle className="text-2xl font-black text-white">{testimonial.name}</CardTitle>
                  <CardDescription className="text-orange-400 font-bold text-lg">
                    {testimonial.result}
                  </CardDescription>
                  <div className="text-sm text-gray-500">{testimonial.program}</div>
                </CardHeader>
                <CardContent>
                  <p className="text-gray-300 italic leading-relaxed">"{testimonial.quote}"</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Enhanced Contact & CTA Section */}
      <section className="py-32 relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-r from-orange-600 via-red-500 to-orange-600"></div>
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_30%_50%,rgba(0,0,0,0.4),transparent_70%)]"></div>
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_70%_50%,rgba(0,0,0,0.4),transparent_70%)]"></div>
        
        {/* 3D Floating Elements */}
        <div className="absolute top-20 left-20 w-8 h-8 bg-white/20 rounded-full animate-bounce delay-100"></div>
        <div className="absolute top-32 right-32 w-6 h-6 bg-white/30 rounded-full animate-bounce delay-300"></div>
        <div className="absolute bottom-32 left-32 w-10 h-10 bg-white/15 rounded-full animate-bounce delay-500"></div>
        
        <div className="relative z-10 container mx-auto px-6 text-center">
          <h2 className="text-6xl md:text-8xl font-black mb-12 text-white leading-tight">
            READY TO START YOUR
            <br />
            <span className="bg-gradient-to-r from-white via-yellow-100 to-white bg-clip-text text-transparent">
              TRANSFORMATION?
            </span>
          </h2>
          <p className="text-2xl md:text-3xl mb-16 max-w-5xl mx-auto text-white/95 leading-relaxed font-bold">
            Join Fusion24's complete fitness ecosystem and experience the difference of training with 
            <span className="text-yellow-200"> Chennai's premier fitness facility</span>
          </p>
          
          <div className="grid md:grid-cols-3 gap-8 mb-16 max-w-5xl mx-auto">
            {[
              { icon: Phone, title: "CALL US NOW", info: "+91 98765 43210", desc: "Speak with our fitness consultants" },
              { icon: Mail, title: "EMAIL US", info: "info@fusion24gym.com", desc: "Get detailed information" },
              { icon: MapPin, title: "VISIT US", info: "Iyyappanthangal, Chennai", desc: "Tour our premium facility" }
            ].map((contact, index) => (
              <div key={index} className="bg-white/15 backdrop-blur-xl rounded-3xl p-8 border border-white/20 shadow-2xl transform hover:scale-105 transition-all duration-300">
                <contact.icon className="h-12 w-12 text-white mx-auto mb-4" />
                <h4 className="font-black text-white mb-3 text-xl">{contact.title}</h4>
                <p className="text-white/95 font-bold text-lg mb-2">{contact.info}</p>
                <p className="text-white/80 text-sm">{contact.desc}</p>
              </div>
            ))}
          </div>

          <div className="flex flex-col sm:flex-row gap-8 justify-center items-center">
            <Button size="lg" className="bg-white text-orange-600 hover:bg-yellow-100 font-black text-2xl px-16 py-8 rounded-3xl shadow-2xl hover:shadow-white/30 transition-all duration-300 transform hover:scale-110 border-2 border-white/50">
              <Trophy className="mr-4 h-8 w-8" />
              BOOK FREE TRIAL
              <ArrowRight className="ml-4 h-8 w-8" />
            </Button>
            <Button 
              size="lg" 
              variant="outline" 
              onClick={() => window.open('tel:+919876543210')}
              className="border-3 border-white text-white hover:bg-white hover:text-orange-600 font-black text-2xl px-16 py-8 rounded-3xl backdrop-blur-xl transition-all duration-300 transform hover:scale-110 shadow-2xl bg-black/20"
            >
              <Phone className="mr-4 h-8 w-8" />
              <span className="drop-shadow-lg">REQUEST CALL BACK</span>
            </Button>
          </div>
        </div>
      </section>

      {/* Enhanced Footer */}
      <footer className="bg-black border-t-2 border-orange-500/30 py-20">
        <div className="container mx-auto px-6">
          <div className="grid md:grid-cols-4 gap-12 mb-16">
            <div>
              <div className="flex items-center space-x-4 mb-8">
                <div className="relative">
                  <div className="w-16 h-16 bg-white/10 backdrop-blur-xl rounded-2xl flex items-center justify-center shadow-2xl border border-orange-500/30">
                    <img src="/images.png" alt="Fusion24" width={60} height={60} className="rounded-xl object-contain" />
                  </div>
                  <div className="absolute -top-2 -right-2 w-6 h-6 bg-gradient-to-r from-yellow-400 to-orange-500 rounded-full animate-pulse"></div>
                </div>
                <div>
                  <span className="text-2xl font-black text-white">FUSION24</span>
                  <div className="text-xs text-orange-400 font-bold">PREMIUM FITNESS STUDIO</div>
                </div>
              </div>
              <p className="text-gray-400 leading-relaxed mb-6 text-lg">
                Complete fitness ecosystem offering training, recovery, and transformation programs in Iyyappanthangal, Chennai.
              </p>
              <p className="text-orange-400 font-black text-xl">Train Strong. Transform Smart.</p>
            </div>
            
            <div>
              <h4 className="font-black text-white mb-8 text-xl flex items-center gap-2">
                <Dumbbell className="h-6 w-6 text-orange-400" />
                PROGRAMS
              </h4>
              <ul className="space-y-4 text-gray-400 text-lg">
                {['Strength Training', 'Boxing Classes', 'CrossFit Training', 'Bootcamp Workouts', 'Functional Training', 'Cardio & Fat Loss'].map((program) => (
                  <li key={program} className="hover:text-orange-400 transition-colors cursor-pointer flex items-center gap-2">
                    <ArrowRight className="h-4 w-4" />
                    {program}
                  </li>
                ))}
              </ul>
            </div>
            
            <div>
              <h4 className="font-black text-white mb-8 text-xl flex items-center gap-2">
                <Shield className="h-6 w-6 text-orange-400" />
                FACILITIES
              </h4>
              <ul className="space-y-4 text-gray-400 text-lg">
                {['Modern Equipment', 'Free Steam Bath', 'Boxing Area', 'CrossFit Rigs', 'Recovery Zones', 'Nutrition Support'].map((facility) => (
                  <li key={facility} className="hover:text-orange-400 transition-colors cursor-pointer flex items-center gap-2">
                    <CheckCircle className="h-4 w-4" />
                    {facility}
                  </li>
                ))}
              </ul>
            </div>
            
            <div>
              <h4 className="font-black text-white mb-8 text-xl flex items-center gap-2">
                <MapPin className="h-6 w-6 text-orange-400" />
                CONTACT
              </h4>
              <ul className="space-y-4 text-gray-400 text-lg">
                <li className="flex items-start gap-3">
                  <MapPin className="h-5 w-5 text-orange-400 mt-1 flex-shrink-0" />
                  <span>Iyyappanthangal Main Road<br />Near Major Hospitals<br />Chennai, Tamil Nadu</span>
                </li>
                <li className="hover:text-orange-400 transition-colors cursor-pointer flex items-center gap-3">
                  <Phone className="h-5 w-5 text-orange-400" />
                  +91 98765 43210
                </li>
                <li className="hover:text-orange-400 transition-colors cursor-pointer flex items-center gap-3">
                  <Mail className="h-5 w-5 text-orange-400" />
                  info@fusion24gym.com
                </li>
              </ul>
            </div>
          </div>
          
          <div className="border-t-2 border-gray-800 pt-8 text-center">
            <p className="text-gray-500 text-lg">
              &copy; 2026 Fusion24 Fitness Studio. All rights reserved. 
              <span className="text-orange-400 font-black"> Your Complete Premium Fitness Ecosystem.</span>
            </p>
          </div>
        </div>
      </footer>
    </div>
  )
}
