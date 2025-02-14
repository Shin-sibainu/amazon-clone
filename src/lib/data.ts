// 遅延をシミュレートする関数
function delay(ms: number) {
  return new Promise((resolve) => setTimeout(resolve, ms));
}

export interface Product {
  id: number;
  name: string;
  price: number;
  description: string;
  category: string;
}

// 商品データを取得する関数
export async function getProducts(): Promise<Product[]> {
  await delay(2000); // 2秒の遅延をシミュレート

  return [
    {
      id: 1,
      name: "Echo Dot (第4世代) スマートスピーカー",
      price: 5980,
      description: "コンパクトながらパワフルな音声アシスタント",
      category: "スマートホーム",
    },
    {
      id: 2,
      name: "Kindle Paperwhite",
      price: 14980,
      description: "防水機能搭載の電子書籍リーダー",
      category: "電子書籍",
    },
    {
      id: 3,
      name: "Fire TV Stick 4K",
      price: 6980,
      description: "4K Ultra HD対応のストリーミングメディアプレーヤー",
      category: "ストリーミング",
    },
    {
      id: 4,
      name: "PlayStation 5",
      price: 54980,
      description: "次世代ゲーム機",
      category: "ゲーム",
    },
    {
      id: 5,
      name: "AirPods Pro",
      price: 29800,
      description: "ノイズキャンセリング機能搭載の完全ワイヤレスイヤホン",
      category: "オーディオ",
    },
    {
      id: 6,
      name: "MacBook Air M2",
      price: 148800,
      description: "薄型・軽量な高性能ノートPC",
      category: "パソコン",
    },
    {
      id: 7,
      name: "iPad Air",
      price: 84800,
      description: "万能タブレット",
      category: "タブレット",
    },
    {
      id: 8,
      name: "Nintendo Switch OLED",
      price: 37980,
      description: "有機ELディスプレイ搭載のゲーム機",
      category: "ゲーム",
    },
  ];
}

// カテゴリー情報を取得する関数
export async function getCategories(): Promise<string[]> {
  await delay(1000); // 1秒の遅延をシミュレート

  return ["家具", "照明", "電化製品"];
}

// おすすめ商品を取得する関数
export async function getFeaturedProducts(): Promise<Product[]> {
  await delay(3000); // 3秒の遅延をシミュレート

  return [
    {
      id: 4,
      name: "スタンディングデスク",
      price: 45000,
      description: "高さ調節可能な机",
      category: "家具",
    },
    {
      id: 5,
      name: "ワイヤレスマウス",
      price: 8000,
      description: "人間工学に基づいた設計",
      category: "電化製品",
    },
  ];
}
