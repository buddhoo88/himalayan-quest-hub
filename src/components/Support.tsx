import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Coffee, Wallet, Heart, ExternalLink, Copy } from "lucide-react";
import { useToast } from "@/hooks/use-toast";

const Support = () => {
  const { toast } = useToast();

  const copyToClipboard = (text: string, type: string) => {
    navigator.clipboard.writeText(text);
    toast({
      title: "Скопировано!",
      description: `${type} адрес скопирован в буфер обмена`,
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
            Поддержать проект
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Ваша поддержка поможет нам осуществить эту уникальную археологическую экспедицию 
            и открыть новые страницы истории древнего Тибета
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-8 mb-12">
          {/* Ko-fi Support */}
          <Card className="p-8 bg-gradient-card border-himalayan-moss/30 hover:shadow-gold transition-all duration-300 group text-center">
            <div className="flex justify-center mb-6">
              <div className="p-4 bg-primary/10 rounded-full group-hover:bg-primary/20 transition-colors">
                <Coffee className="h-12 w-12 text-primary" />
              </div>
            </div>
            <h3 className="text-2xl font-bold mb-4 text-foreground">Ko-fi поддержка</h3>
            <p className="text-muted-foreground mb-6 leading-relaxed">
              Поддержите нас через Ko-fi - простой и безопасный способ внести свой вклад в экспедицию
            </p>
            <Button 
              size="lg" 
              className="bg-gradient-gold hover:shadow-gold transition-all duration-300 transform hover:scale-105 w-full"
              onClick={() => window.open('https://ko-fi.com/himalayan_expedition', '_blank')}
            >
              <ExternalLink className="h-5 w-5 mr-2" />
              Поддержать на Ko-fi
            </Button>
          </Card>

          {/* Crypto Support */}
          <Card className="p-8 bg-gradient-card border-himalayan-moss/30 hover:shadow-gold transition-all duration-300 group text-center">
            <div className="flex justify-center mb-6">
              <div className="p-4 bg-primary/10 rounded-full group-hover:bg-primary/20 transition-colors">
                <Wallet className="h-12 w-12 text-primary" />
              </div>
            </div>
            <h3 className="text-2xl font-bold mb-4 text-foreground">Криптовалюта</h3>
            <p className="text-muted-foreground mb-6 leading-relaxed">
              Поддержите экспедицию криптовалютой - современный и анонимный способ пожертвования
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
        </div>

        {/* Why Support */}
        <Card className="p-8 bg-gradient-card border-himalayan-moss/30">
          <div className="flex items-center justify-center mb-6">
            <Heart className="h-8 w-8 text-primary mr-3" />
            <h3 className="text-2xl font-bold text-foreground">Почему ваша поддержка важна?</h3>
          </div>
          <div className="grid md:grid-cols-3 gap-6 text-center">
            <div>
              <div className="text-3xl font-bold text-primary mb-2">$50,000</div>
              <div className="text-sm text-muted-foreground">Требуется для экспедиции</div>
            </div>
            <div>
              <div className="text-3xl font-bold text-primary mb-2">6</div>
              <div className="text-sm text-muted-foreground">Участников команды</div>
            </div>
            <div>
              <div className="text-3xl font-bold text-primary mb-2">18</div>
              <div className="text-sm text-muted-foreground">Месяцев исследований</div>
            </div>
          </div>
          <div className="mt-8 text-center">
            <p className="text-muted-foreground leading-relaxed">
              Средства пойдут на аренду специального оборудования, транспорт, проживание команды, 
              страховку и документооборот. Каждый вклад приближает нас к великим открытиям!
            </p>
          </div>
        </Card>
      </div>
    </section>
  );
};

export default Support;