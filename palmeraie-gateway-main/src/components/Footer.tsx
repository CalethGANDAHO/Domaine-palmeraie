import elSabaothLogo from "@/assets/el-sabaoth-logo.png";

const Footer = () => (
  <footer className="bg-foreground border-t border-primary-foreground/10 py-8 px-4">
    <div className="container max-w-6xl mx-auto flex flex-col items-center gap-6">
      <div className="flex flex-col md:flex-row items-center justify-between w-full gap-4">
        <p className="font-heading text-primary-foreground/60 text-sm">
          © {new Date().getFullYear()} Domaine de la Palmeraie — Ouidah, Bénin
        </p>
        <p className="text-primary-foreground/40 text-xs font-body">
          Tous droits réservés
        </p>
      </div>
      <div className="flex items-center gap-2 opacity-50 hover:opacity-80 transition-opacity">
        <img src={elSabaothLogo} alt="El-Sabaoth Technology Innovation Lab" className="h-6 w-auto" />
        <span className="text-primary-foreground/40 text-[10px] font-body">Site réalisé par El-Sabaoth</span>
      </div>
    </div>
  </footer>
);

export default Footer;
