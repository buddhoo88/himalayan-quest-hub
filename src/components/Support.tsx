import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Coffee, Wallet, Heart, ExternalLink, Copy } from "lucide-react";
import { useToast } from "@/hooks/use-toast";

const Support = () => {
  const { toast } = useToast();

  const copyToClipboard = (text: string, type: string) => {
    navigator.clipboard.writeText(text);
    toast({
      title: "Copied!",
      description: `${type} address copied to clipboard`,
    });
  };

  const cryptoWallets = [
    {
      name: "Bitcoin",
      address: "bc1qxy2kgdygjrsqtzq2n0yrf2493p83kkfjhx0wlh",
      symbol: "BTC"
    },
    {
      name: "Ethereum",
      address: "0x742d35Cc6e9a7F4C0e8B6e9f8E5c8e5f2c8b8e5c",
      symbol: "ETH"
    },
    {
      name: "Litecoin",
      address: "ltc1qw4xzk5d8c7v9b2n1m3k5j7h8g6f4d3s2a1z0x9c8v",
      symbol: "LTC"
    }
  ];

  return (
    <section id="support" className="py-20 px-4 bg-background">
      <div className="container mx-auto max-w-4xl">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-6 bg-gradient-gold bg-clip-text text-transparent">
            Our Fundraising
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Your support will help us carry out this unique archaeological expedition 
            and discover new chapters in the history of ancient Tibet
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8 mb-12">
          <Button 
            size="lg" 
            className="bg-gradient-gold hover:shadow-gold transition-all duration-300 transform hover:scale-105 h-16"
            onClick={() => window.open('https://ko-fi.com/himalayan_expedition', '_blank')}
          >
            <ExternalLink className="h-5 w-5 mr-2" />
            Ko-fi
          </Button>
          
          <Button 
            size="lg" 
            className="bg-gradient-gold hover:shadow-gold transition-all duration-300 transform hover:scale-105 h-16"
            onClick={() => window.open('https://giveth.io/project/himalayan-expedition', '_blank')}
          >
            <ExternalLink className="h-5 w-5 mr-2" />
            Giveth.io
          </Button>
          
          <Button 
            size="lg" 
            className="bg-gradient-gold hover:shadow-gold transition-all duration-300 transform hover:scale-105 h-16"
            onClick={() => window.open('https://www.gofundme.com/himalayan-expedition', '_blank')}
          >
            <ExternalLink className="h-5 w-5 mr-2" />
            GoFundMe
          </Button>
        </div>

        {/* Crypto Support */}
        <Card className="p-8 bg-gradient-card border-himalayan-moss/30 hover:shadow-gold transition-all duration-300 group text-center mb-12">
          <div className="flex justify-center mb-6">
            <div className="p-4 bg-primary/10 rounded-full group-hover:bg-primary/20 transition-colors">
              <Wallet className="h-12 w-12 text-primary" />
            </div>
          </div>
          <h3 className="text-2xl font-bold mb-4 text-foreground">Cryptocurrency</h3>
          <p className="text-muted-foreground mb-6 leading-relaxed">
            Support the expedition with cryptocurrency - a modern and anonymous way to donate
          </p>
          <div className="space-y-3">
            {cryptoWallets.map((wallet) => (
              <div key={wallet.symbol} className="flex items-center justify-between p-3 bg-himalayan-deep/30 rounded-lg">
                <div className="text-left">
                  <div className="font-semibold text-sm text-foreground">{wallet.name}</div>
                  <div className="text-xs text-muted-foreground truncate max-w-[200px]">
                    {wallet.address}
                  </div>
                </div>
                <Button
                  size="sm"
                  variant="ghost"
                  onClick={() => copyToClipboard(wallet.address, wallet.name)}
                  className="hover:bg-primary/20"
                >
                  <Copy className="h-4 w-4" />
                </Button>
              </div>
            ))}
          </div>
        </Card>

        {/* Why Support */}
        <Card className="p-8 bg-gradient-card border-himalayan-moss/30">
          <div className="flex items-center justify-center mb-6">
            <Heart className="h-8 w-8 text-primary mr-3" />
            <h3 className="text-2xl font-bold text-foreground">Why is your support important?</h3>
          </div>
          <div className="grid md:grid-cols-3 gap-6 text-center">
            <div>
              <div className="text-3xl font-bold text-primary mb-2">$30,000</div>
              <div className="text-sm text-muted-foreground">Required for expedition</div>
            </div>
            <div>
              <div className="text-3xl font-bold text-primary mb-2">3</div>
              <div className="text-sm text-muted-foreground">Team members</div>
            </div>
            <div>
              <div className="text-3xl font-bold text-primary mb-2">14</div>
              <div className="text-sm text-muted-foreground">Months of research</div>
            </div>
          </div>
          <div className="mt-8 text-center">
            <p className="text-muted-foreground leading-relaxed">
              Funds will go towards renting specialized equipment, transportation, team accommodation, 
              insurance, and documentation. Every contribution brings us closer to great discoveries!
            </p>
          </div>
        </Card>
      </div>
    </section>
  );
};

export default Support;