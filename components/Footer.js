import React from "react"

const Footer = () => {
  return (
    <div className="grid grid-cols-1 md:grid-cols-4 gap-y-10 px-32 md:px-48  py-7 md:py-14 bg-white border-double border-2 border-blue-200 font-serif">
      <div className="space-y-4 text-xs text-slate-900 hidden md:grid">
        <h5 className="text-lg font-bold">About</h5>
        <p>How WindBnb Works</p>
        <p>Newsroom</p>
        <p>Investors</p>
        <p>WindBnb Luxe</p>
      </div>
      <div className="space-y-4 text-xs text-slate-900 hidden md:grid">
        <h5 className="text-lg font-bold">Host</h5>
        <p>Hosting</p>
        <p>Bonuses</p>
        <p>Gain without Pain</p>
        <p>Easy to manage</p>
      </div>
      <div className="space-y-4 text-sm m:text-xs text-slate-900">
        <h5 className="text-lg font-bold">Community</h5>
        <p>Accessibility</p>
        <p>This is not a real site</p>
        <p>Challenge Accepted</p>
        <p>Umar 2022</p>
      </div>
      <div className="space-y-4 text-xs text-slate-900 hidden md:grid">
        <h5 className="text-lg font-bold">Support</h5>
        <p>Help Centre</p>
        <p>Trust & Safety</p>
        <p>Say Hi </p>
        <p>Have a goodDay</p>
      </div>
    </div>
  )
}

export default Footer
