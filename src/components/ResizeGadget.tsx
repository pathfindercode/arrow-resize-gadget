import { X } from "lucide-react";
import { useState } from "react";

const ResizeGadget = () => {
  const [isVisible, setIsVisible] = useState(true);

  if (!isVisible) return null;

  return (
    <div className="fixed top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2">
      <div className="relative flex items-center gap-2 w-[244px] h-[94px]">
        {/* Custom Arrow SVG - kept as SVG for exact design match */}
        <div className="absolute -left-[30px] top-1/2 transform -translate-y-1/2 -rotate-[0.316deg] w-[46.306px] h-[20px] animate-bounce">
          <svg xmlns="http://www.w3.org/2000/svg" width="50" height="24" viewBox="0 0 50 24" fill="none">
            <path d="M2.04128 18.8177C1.56205 19.4934 1.72136 20.4297 2.39711 20.9089C3.07286 21.3881 4.00915 21.2288 4.48838 20.5531L2.04128 18.8177ZM47.6583 5.61638C48.4024 5.98041 49.3008 5.67224 49.6648 4.92808C50.0288 4.18391 49.7207 3.28555 48.9765 2.92153L47.6583 5.61638ZM3.53008 7.72637C3.51335 6.89811 2.82836 6.24023 2.0001 6.25695C1.17184 6.27367 0.513964 6.95867 0.530686 7.78692L3.53008 7.72637ZM2.24485 18.3792L0.745158 18.4095L0.745183 18.4107L2.24485 18.3792ZM4.41518 21.0856L4.5924 19.5961L4.59077 19.5959L4.41518 21.0856ZM13.5322 23.6809C14.3548 23.7787 15.101 23.1912 15.1989 22.3686C15.2968 21.546 14.7092 20.7998 13.8866 20.7019L13.5322 23.6809ZM3.26483 19.6854C4.48838 20.5531 4.48819 20.5533 4.48804 20.5536C4.48803 20.5536 4.48792 20.5537 4.48791 20.5537C4.4879 20.5537 4.48804 20.5536 4.48832 20.5532C4.48888 20.5524 4.49002 20.5508 4.49174 20.5484C4.49517 20.5436 4.5009 20.5356 4.50891 20.5245C4.52493 20.5023 4.55005 20.4677 4.58408 20.4215C4.65215 20.3289 4.75581 20.1897 4.8935 20.0098C5.16896 19.6498 5.58017 19.1273 6.11461 18.4891C7.18461 17.2114 8.74265 15.477 10.6885 13.6575C14.6089 9.99188 19.9717 6.10521 25.989 4.76594L25.3372 1.83759C18.5548 3.34716 12.7185 7.6523 8.63959 11.4662C6.58588 13.3865 4.9443 15.2139 3.81457 16.563C3.24916 17.2382 2.81048 17.7953 2.51102 18.1867C2.36126 18.3824 2.2462 18.5368 2.16741 18.6439C2.12802 18.6975 2.09768 18.7392 2.07659 18.7684C2.06605 18.783 2.05782 18.7945 2.05192 18.8027C2.04898 18.8068 2.04661 18.8102 2.04484 18.8126C2.04395 18.8139 2.04321 18.8149 2.04262 18.8158C2.04232 18.8162 2.04198 18.8167 2.04184 18.8169C2.04154 18.8173 2.04128 18.8177 3.26483 19.6854ZM25.989 4.76594C38.4441 1.99382 45.9557 4.78356 47.6583 5.61638L48.9765 2.92153C46.6864 1.80127 38.4817 -1.08796 25.3372 1.83759L25.989 4.76594ZM0.530686 7.78692L0.745159 18.4095L3.74455 18.349L3.53008 7.72637L0.530686 7.78692ZM0.745183 18.4107C0.786695 20.3907 2.12657 22.3262 4.23959 22.5752L4.59077 19.5959C4.27848 19.5591 3.76177 19.1705 3.74452 18.3478L0.745183 18.4107ZM4.23796 22.575L13.5322 23.6809L13.8866 20.7019L4.5924 19.5961L4.23796 22.575Z" fill="#93370D"/>
          </svg>
        </div>

        {/* Resize Label */}
        <div className="flex h-9 px-3 py-2 justify-center items-center rounded-2xl border border-[#E9EAEB] bg-[#FFFCF5] shadow-[0px_12px_16px_-4px_rgba(16,24,40,0.08),0px_4px_6px_-2px_rgba(16,24,40,0.03)] font-bold text-[#93370D] relative z-10">
          You can resize here!
        </div>

        {/* Close Button */}
        <button 
          onClick={() => setIsVisible(false)}
          className="flex w-7 h-7 p-2 justify-center items-center flex-shrink-0 rounded-lg border border-[#E9EAEB] bg-[#F9FAFB] shadow-[9px_20px_24px_-4px_rgba(16,24,40,0.14),0px_8px_8px_-4px_rgba(16,24,40,0.14)] hover:bg-[#F5F5F5] cursor-pointer relative z-20"
        >
          <X className="w-3.5 h-3.5" />
        </button>
      </div>
    </div>
  );
};

export default ResizeGadget;