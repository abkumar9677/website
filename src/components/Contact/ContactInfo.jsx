import React from "react";
import { Mail, Phone, MapPin, ExternalLink } from "lucide-react";

const ContactInfo = () => {
  const contactDetails = [
    {
      icon: Mail,
      label: "Email",
      value: "abhi967792@gmail.com",
      link: "mailto:abhi967792@gmail.com",
      gradient: "from-blue-500 to-cyan-500",
    },
    {
      icon: Phone,
      label: "Phone",
      value: "+91 7266022294",
      link: "tel:+917266022294",
      gradient: "from-green-500 to-emerald-500",
    },
    {
      icon: MapPin,
      label: "Location",
      value: "Noida, Uttar Pradesh, India",
      link: "https://maps.google.com/?q=Noida,UP",
      gradient: "from-purple-500 to-pink-500",
    },
  ];

  return (
    <div className="space-y-6">
      {contactDetails.map((detail, index) => (
        <a
          key={index}
          href={detail.link}
          target="_blank"
          rel="noopener noreferrer"
          className="group block"
        >
          <div className="relative bg-gradient-to-br from-gray-800 to-gray-900 rounded-2xl p-6 border-2 border-gray-700 hover:border-orange-500 transition-all hover:shadow-2xl hover:shadow-orange-500/20">
            <div className="flex items-center gap-4">
              <div
                className={`relative p-4 bg-gradient-to-r ${detail.gradient} rounded-xl shadow-lg group-hover:scale-110 transition-transform`}
              >
                <detail.icon className="w-6 h-6 text-white" />
                <div
                  className={`absolute inset-0 bg-gradient-to-r ${detail.gradient} rounded-xl blur-lg opacity-50`}
                ></div>
              </div>
              <div className="flex-1">
                <p className="text-gray-400 text-sm mb-1">{detail.label}</p>
                <p className="text-white font-semibold text-lg group-hover:text-orange-400 transition-colors">
                  {detail.value}
                </p>
              </div>
              <ExternalLink className="w-5 h-5 text-gray-600 group-hover:text-orange-500 transition-colors" />
            </div>
          </div>
        </a>
      ))}
    </div>
  );
};

export default ContactInfo;
