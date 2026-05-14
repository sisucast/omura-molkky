import { useState, useEffect } from 'react'
import { MapPin, Clock, Users, Zap, Mail, ChevronDown, ArrowRight, Trophy } from 'lucide-react'
import './App.css'

const FORM_URL        = 'https://forms.gle/Drg6SsxVzhbBWVyt6'
const CONTACT_EMAIL   = 'sales@sisucast.com'
const EVENT_DATE      = new Date(2026, 3, 19, 10, 0, 0) // 2026年4月19日 10:00
const SITE_URL        = 'https://omura-molkky.pages.dev'
const EVENT_TITLE     = '第1回大村モルックカップ'

const ANTON = '"Anton", sans-serif'
const NOTO  = '"Noto Sans JP", sans-serif'

// 画像パス
const IMG = {
  hero:    '/assets/LINE_ALBUM_素材写真_260312_89999.jpg', // モルックピンセット
  throw:   '/assets/LINE_ALBUM_素材写真_260312_2.jpg',   // 投擲アクションショット
  palms:   '/assets/LINE_ALBUM_素材写真_260312_1.jpg',   // ヤシの木とピン
  court:   '/assets/LINE_ALBUM_素材写真_260312_6.jpg',   // コート全景
  play1:   '/assets/S__73965585_0.jpg',                  // ピン＋ヤシの木（縦長）
  play2:   '/assets/S__73965588.jpg',                    // 投擲シーン（横長）
  crowd:   '/assets/S__73965586_0.jpg',                  // 観戦する参加者（横長）
  logo:    '/assets/大村モルッククラブロゴ.png',
}

/* ──────────────────────────────────────────
   爆発バッジ（参加者大募集）
────────────────────────────────────────── */
const StarBurst = ({ children, className = '' }) => (
  <div className={`relative inline-flex items-center justify-center ${className}`}>
    <svg viewBox="0 0 120 120" className="absolute inset-0 w-full h-full" xmlns="http://www.w3.org/2000/svg">
      <polygon
        points="60,2 68,34 94,16 80,44 112,42 90,62 112,76 80,78 96,106 66,88 64,118 48,88 22,108 34,78 2,78 24,60 0,44 32,46 18,16 46,34"
        fill="#E91E8C"
      />
    </svg>
    <div className="relative z-10 text-center text-white font-black leading-tight" style={{ fontFamily: NOTO }}>
      {children}
    </div>
  </div>
)

/* ──────────────────────────────────────────
   カウントダウンタイマー
────────────────────────────────────────── */
const Countdown = () => {
  const [timeLeft, setTimeLeft] = useState({ days: 0, hours: 0, minutes: 0 })

  useEffect(() => {
    const updateCountdown = () => {
      const now = new Date()
      const diff = EVENT_DATE - now
      if (diff > 0) {
        const days = Math.floor(diff / (1000 * 60 * 60 * 24))
        const hours = Math.floor((diff % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60))
        const minutes = Math.floor((diff % (1000 * 60 * 60)) / (1000 * 60))
        setTimeLeft({ days, hours, minutes })
      } else {
        setTimeLeft({ days: 0, hours: 0, minutes: 0 })
      }
    }
    updateCountdown()
    const timer = setInterval(updateCountdown, 1000)
    return () => clearInterval(timer)
  }, [])

  return (
    <div className="flex flex-wrap justify-center gap-4 md:gap-6 items-center">
      <div className="text-center">
        <div className="bg-gradient-to-b from-[#FFD600] to-[#E6B800] rounded-xl px-6 py-3 md:px-8 md:py-4 shadow-lg border-2 border-[#1A237E]/20">
          <p className="text-3xl md:text-4xl font-black text-[#1A237E]" style={{ fontFamily: ANTON }}>
            {timeLeft.days}
          </p>
          <p className="text-xs md:text-sm font-bold text-[#1A237E] mt-1">日</p>
        </div>
      </div>
      <div className="text-3xl md:text-4xl font-black text-[#1A237E]">:</div>
      <div className="text-center">
        <div className="bg-gradient-to-b from-[#FFD600] to-[#E6B800] rounded-xl px-6 py-3 md:px-8 md:py-4 shadow-lg border-2 border-[#1A237E]/20">
          <p className="text-3xl md:text-4xl font-black text-[#1A237E]" style={{ fontFamily: ANTON }}>
            {String(timeLeft.hours).padStart(2, '0')}
          </p>
          <p className="text-xs md:text-sm font-bold text-[#1A237E] mt-1">時間</p>
        </div>
      </div>
      <div className="text-3xl md:text-4xl font-black text-[#1A237E]">:</div>
      <div className="text-center">
        <div className="bg-gradient-to-b from-[#FFD600] to-[#E6B800] rounded-xl px-6 py-3 md:px-8 md:py-4 shadow-lg border-2 border-[#1A237E]/20">
          <p className="text-3xl md:text-4xl font-black text-[#1A237E]" style={{ fontFamily: ANTON }}>
            {String(timeLeft.minutes).padStart(2, '0')}
          </p>
          <p className="text-xs md:text-sm font-bold text-[#1A237E] mt-1">分</p>
        </div>
      </div>
    </div>
  )
}

/* ──────────────────────────────────────────
   MOLKKY ロゴ（SVG テキスト・黄＋青縁）
────────────────────────────────────────── */
const MolkkyLogo = ({ className = '' }) => (
  <svg viewBox="0 0 620 110" className={className} xmlns="http://www.w3.org/2000/svg">
    <text
      x="50%" y="95"
      textAnchor="middle"
      fontFamily="Anton, sans-serif"
      fontSize="108"
      letterSpacing="-2"
      fill="#FFD600"
      stroke="#1A237E"
      strokeWidth="10"
      paintOrder="stroke fill"
    >
      MOLKKY
    </text>
  </svg>
)

/* ──────────────────────────────────────────
   セクション見出し
────────────────────────────────────────── */
const SectionHeading = ({ en, ja, light = false }) => (
  <div className="text-center mb-10 md:mb-14">
    <p className={`text-xs font-bold tracking-[0.3em] uppercase mb-2 ${light ? 'text-[#FFD600]' : 'text-[#E91E8C]'}`}
       style={{ fontFamily: NOTO }}>
      {en}
    </p>
    <h2 className={`font-black leading-tight ${light ? 'text-white' : 'text-[#1A237E]'}`}
        style={{ fontFamily: NOTO, fontSize: 'clamp(1.8rem, 5vw, 2.8rem)' }}>
      {ja}
    </h2>
  </div>
)

/* ──────────────────────────────────────────
   CTAボタン
────────────────────────────────────────── */
const CTAButton = ({ label = '参加申し込みはこちら', large = true, className = '' }) => (
  <a
    href={FORM_URL}
    target="_blank"
    rel="noopener noreferrer"
    className={[
      'group inline-flex items-center justify-center gap-3',
      'bg-[#E91E8C] hover:bg-[#C2185B]',
      'text-white font-black',
      large ? 'text-lg md:text-xl px-10 py-5' : 'text-base px-6 py-3',
      'rounded-full shadow-2xl border-4 border-[#F472B6]',
      'transform hover:scale-105 hover:-translate-y-1 transition-all duration-200',
      className,
    ].join(' ')}
    style={{ fontFamily: NOTO }}
  >
    🎯 {label}
    <ArrowRight size={20} className="group-hover:translate-x-1 transition-transform" />
  </a>
)

/* ──────────────────────────────────────────
   詳細カード
────────────────────────────────────────── */
const DetailCard = ({ icon, label, value, sub }) => (
  <div className="bg-white/10 hover:bg-white/20 border border-white/20 rounded-2xl p-5 md:p-6 transition-colors">
    <div className="flex items-start gap-4">
      <div className="bg-white/10 rounded-xl p-3 flex-shrink-0">{icon}</div>
      <div>
        <p className="text-[#FFD600] text-xs font-bold tracking-widest uppercase mb-1" style={{ fontFamily: NOTO }}>{label}</p>
        <p className="text-white font-black text-lg md:text-xl leading-snug" style={{ fontFamily: NOTO }}>{value}</p>
        {sub && <p className="text-blue-200 text-sm mt-1" style={{ fontFamily: NOTO }}>{sub}</p>}
      </div>
    </div>
  </div>
)

/* ──────────────────────────────────────────
   App
────────────────────────────────────────── */
export default function App() {
  return (
    <div className="min-h-screen overflow-x-hidden" style={{ fontFamily: NOTO }}>

      {/* ════════════════════════════════
          HERO
      ════════════════════════════════ */}
      <section className="relative">

        {/* ── 写真エリア ── */}
        <div className="relative h-[48vh] md:h-[56vh] overflow-hidden">
          <img
            src={IMG.hero}
            alt="モルックのピン"
            className="w-full h-full object-cover"
            style={{ objectPosition: 'center center' }}
          />
          {/* 上部のみ暗くする（写真底部は黄色グラデなし） */}
          <div className="absolute top-0 inset-x-0 h-32 bg-gradient-to-b from-black/50 to-transparent" />

          {/* 爆発バッジ */}
          <StarBurst className="absolute top-4 right-4 md:top-6 md:right-6 w-20 h-20 md:w-28 md:h-28 z-20 drop-shadow-xl">
            <span className="text-xs md:text-sm">参加者<br />大募集</span>
          </StarBurst>
        </div>

        {/* ── 黄色エリア（写真に丸く重なるカード形式） ── */}
        <div className="bg-[#FFD600] -mt-6 rounded-t-[32px] relative z-10 px-4 pb-12 md:pb-16 text-center">

          {/* キャッチコピー */}
          <p
            className="pt-5 mb-1 font-black italic text-white drop-shadow-[2px_2px_4px_#E91E8C]"
            style={{ fontFamily: NOTO, fontSize: 'clamp(1.4rem, 5vw, 2.2rem)' }}
          >
            モルックしようぜ！
          </p>

          {/* MOLKKY ロゴ */}
          <MolkkyLogo className="w-full max-w-sm md:max-w-xl mx-auto -mb-2" />

          {/* 大会名 */}
          <h1
            className="text-[#1A237E] font-black mb-4"
            style={{ fontFamily: NOTO, fontSize: 'clamp(1.1rem, 4vw, 1.8rem)' }}
          >
            第1回大村モルックカップ
          </h1>

          {/* 日時（AntonフォントでPOP風に） */}
          <div className="text-[#E91E8C] leading-none mb-2" style={{ fontFamily: ANTON }}>
            <div style={{ fontSize: 'clamp(2.4rem, 9vw, 5rem)' }}>2026.4.19 SUN</div>
            <div style={{ fontSize: 'clamp(2rem, 8vw, 4.2rem)' }}>10:00–13:00</div>
          </div>

          {/* 参加費・会場バッジ + CTA（同幅で揃える） */}
          <div className="flex flex-col gap-3 mt-4 mb-6 w-full max-w-sm mx-auto">
            <div className="flex items-center gap-2 text-white text-sm font-bold px-4 py-2 rounded-full bg-[#1A237E] shadow w-full">
              <span className="bg-white text-[#1A237E] rounded-full py-0.5 text-xs font-black flex-shrink-0 text-center w-14">参加費</span>
              <span>1人：500円（1チーム3人〜4人のチーム戦）</span>
            </div>
            <div className="flex items-center gap-2 text-white text-sm font-bold px-4 py-2 rounded-full bg-[#E91E8C] shadow w-full">
              <span className="bg-white text-[#E91E8C] rounded-full py-0.5 text-xs font-black flex-shrink-0 text-center w-14">会　場</span>
              <span>大村市総合運動公園　グラウンドゴルフ場</span>
            </div>
            <CTAButton className="w-full" />
          </div>

          {/* スクロールヒント */}
          <div className="flex justify-center mt-6 text-[#1A237E] opacity-40 animate-bounce">
            <ChevronDown size={28} />
          </div>
        </div>
      </section>

      {/* ════════════════════════════════
          ABOUT
      ════════════════════════════════ */}
      <section className="bg-white py-20 md:py-28 px-4">
        <div className="max-w-4xl mx-auto">
          <SectionHeading en="ABOUT THE EVENT" ja="大会について" />

          {/* アクションショット + 説明 */}
          <div className="flex flex-col md:flex-row gap-8 items-stretch mb-12">
            {/* 投擲写真 */}
            <div className="md:w-2/5 rounded-2xl overflow-hidden shadow-xl flex-shrink-0">
              <img
                src={IMG.throw}
                alt="モルックを投げる"
                className="w-full h-full object-cover"
                style={{ minHeight: '280px', maxHeight: '420px' }}
              />
            </div>

            {/* 説明テキスト */}
            <div className="md:w-3/5 flex flex-col justify-center">
              <h3 className="text-[#1A237E] font-black text-xl md:text-2xl mb-4 flex items-center gap-2" style={{ fontFamily: NOTO }}>
                <span className="text-3xl">🎯</span> モルックって何？
              </h3>
              <div className="bg-[#FFFBE6] border-2 border-[#FFD600] rounded-2xl p-5 space-y-3">
                <p className="text-gray-700 leading-relaxed">
                  モルックはフィンランド発祥の屋外スポーツ。木製の投棒（モルック）を投げて、
                  1〜12の数字が書かれた木のピン（スキットル）を倒します。
                </p>
                <p className="text-gray-700 leading-relaxed">
                  ちょうど<strong className="text-[#E91E8C]">50点</strong>にしたチームが勝利！
                  超えると<strong className="text-[#1A237E]">25点に戻る</strong>ドキドキルールです。
                </p>
                <p className="text-gray-700 leading-relaxed">
                  力より<strong>戦略と正確さ</strong>が勝負のカギ。老若男女が楽しめます。
                </p>
              </div>
            </div>
          </div>

          {/* 魅力3カード */}
          <div className="grid sm:grid-cols-3 gap-5 mb-12">
            {[
              { emoji: '👶', title: '誰でも楽しめる',    desc: '年齢・体力問わずOK！当日ルール説明あり。初めての方も安心。',  border: 'border-[#FFD600]' },
              { emoji: '🧠', title: '戦略が熱い！',      desc: 'ちょうど50点を狙う頭脳戦。逆転ありの白熱バトルが続出！',      border: 'border-[#1A237E]' },
              { emoji: '🤝', title: 'チームで盛り上がる', desc: '3〜4人で挑戦。仲間との連帯感と達成感がたまらない。',          border: 'border-[#E91E8C]' },
            ].map(({ emoji, title, desc, border }) => (
              <div key={title}
                   className={`bg-white rounded-2xl p-5 shadow-lg border-t-4 ${border} hover:shadow-xl hover:-translate-y-1 transition-all`}>
                <div className="text-4xl mb-3">{emoji}</div>
                <h4 className="text-[#1A237E] font-black text-lg mb-2" style={{ fontFamily: NOTO }}>{title}</h4>
                <p className="text-gray-500 text-sm leading-relaxed">{desc}</p>
              </div>
            ))}
          </div>

          {/* フォトギャラリー：縦長1枚（左）＋横長2枚（右上・右下） */}
          <div
            className="grid gap-3 rounded-2xl overflow-hidden shadow-xl"
            style={{
              gridTemplateColumns: '2fr 3fr',
              gridTemplateRows: '1fr 1fr',
              height: '400px',
            }}
          >
            {/* 左：ピン＋ヤシ（2行分） */}
            <div className="relative overflow-hidden" style={{ gridRow: '1 / 3' }}>
              <img src={IMG.play1} alt="モルックのピンとヤシの木"
                   className="w-full h-full object-cover object-center hover:scale-105 transition-transform duration-500" />
            </div>
            {/* 右上：投擲シーン */}
            <div className="relative overflow-hidden">
              <img src={IMG.play2} alt="モルック投擲シーン"
                   className="w-full h-full object-cover object-center hover:scale-105 transition-transform duration-500" />
            </div>
            {/* 右下：観戦参加者 */}
            <div className="relative overflow-hidden">
              <img src={IMG.crowd} alt="観戦する参加者"
                   className="w-full h-full object-cover object-[center_60%] hover:scale-105 transition-transform duration-500" />
            </div>
          </div>
        </div>
      </section>

      {/* ════════════════════════════════
          DETAILS
      ════════════════════════════════ */}
      <section className="bg-[#1A237E] py-20 md:py-28 px-4 relative overflow-hidden">

        {/* 透かし */}
        <p className="absolute inset-0 flex items-center justify-center text-white opacity-[0.04]
                      pointer-events-none select-none tracking-tighter"
           style={{ fontFamily: ANTON, fontSize: '20vw' }}>
          MOLKKY
        </p>

        {/* 右側：写真装飾 */}
        <div className="absolute right-0 top-0 bottom-0 w-1/3 md:w-1/4 opacity-15 pointer-events-none hidden md:block">
          <img src={IMG.play1} alt="" className="w-full h-full object-cover object-center" />
          <div className="absolute inset-0 bg-gradient-to-r from-[#1A237E] to-transparent" />
        </div>

        <div className="relative max-w-3xl mx-auto">
          <SectionHeading en="EVENT DETAILS" ja="大会詳細" light />

          <div className="mb-12">
            <p className="text-white/80 text-center text-sm md:text-base mb-6" style={{ fontFamily: NOTO }}>大会開催まで</p>
            <Countdown />
          </div>

          <div className="grid sm:grid-cols-2 gap-4 md:gap-5 mb-8">
            <DetailCard icon={<Clock  className="text-[#FFD600]" size={26}/>} label="日時"     value="2026年4月19日（日）" sub="10:00〜13:00（受付 9:30〜）"/>
            <DetailCard icon={<MapPin className="text-[#FFD600]" size={26}/>} label="会場"     value="大村市総合運動公園"    sub="グラウンドゴルフ場"/>
            <DetailCard icon={<Users  className="text-[#FFD600]" size={26}/>} label="参加形式" value="チーム戦"              sub="1チーム 3〜4名"/>
            <DetailCard icon={<Zap    className="text-[#FFD600]" size={26}/>} label="参加費"   value="500円 ／ 1人"         sub="当日受付にてお支払い"/>
          </div>

          <div className="bg-[#E91E8C]/20 border border-[#E91E8C]/50 rounded-2xl p-5 text-center mb-10">
            <p className="text-white font-bold leading-relaxed">
              🏆 初心者大歓迎・当日ルール説明あり！<br />
              <span className="text-blue-200 font-normal text-sm">スタッフが丁寧にご説明。モルック未経験の方もぜひ！</span>
            </p>
          </div>

          <div className="flex justify-center">
            <CTAButton />
          </div>
        </div>
      </section>

      {/* ════════════════════════════════
          ACCESS
      ════════════════════════════════ */}
      <section className="bg-[#F5F7FA] py-20 md:py-28 px-4">
        <div className="max-w-3xl mx-auto">
          <SectionHeading en="ACCESS" ja="アクセス" />

          <div className="bg-white rounded-3xl shadow-xl overflow-hidden">
            <div className="bg-[#FFD600] px-5 md:px-7 py-4 flex items-start gap-3">
              <MapPin className="text-[#1A237E] mt-0.5 flex-shrink-0" size={20} />
              <div>
                <p className="text-[#1A237E] font-black text-base md:text-lg" style={{ fontFamily: NOTO }}>
                  大村市総合運動公園 グラウンドゴルフ場
                </p>
                <p className="text-[#1A237E]/60 text-sm">〒856-0808 長崎県大村市黒丸町5番1</p>
              </div>
            </div>
            <div className="w-full h-72 md:h-96 bg-gray-100">
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3347.681265870981!2d129.9325759!3d32.9594236!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x356aa6d0e71d7b23%3A0x324664aa11ddf126!2z5aSn5p2R5biC57eP5ZCI6YGL5YuV5YWs5ZyS5aSa55uu55qE5bqD5aC0!5e0!3m2!1sja!2sjp!4v1775483738840!5m2!1sja!2sjp"
                width="100%" height="100%"
                style={{ border: 0, display: 'block' }}
                allowFullScreen loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                title="会場マップ"
              />
            </div>
            <div className="p-5 md:p-7 grid sm:grid-cols-2 gap-5">
              <div className="flex items-start gap-3">
                <span className="text-2xl leading-none mt-0.5">🚗</span>
                <div>
                  <p className="text-[#1A237E] font-black text-sm mb-0.5">お車でお越しの方</p>
                  <p className="text-gray-500 text-sm leading-relaxed">駐車場あり（無料）<br/>西九州自動車道 大村ICより約5分</p>
                </div>
              </div>
              <div className="flex items-start gap-3">
                <span className="text-2xl leading-none mt-0.5">🚌</span>
                <div>
                  <p className="text-[#1A237E] font-black text-sm mb-0.5">公共交通機関でお越しの方</p>
                  <p className="text-gray-500 text-sm leading-relaxed">JR新大村駅・竹松駅・松原駅よりバス・タクシーをご利用ください</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ════════════════════════════════
          CONTACT / CTA
      ════════════════════════════════ */}
      <section className="bg-[#FFD600] py-20 md:py-24 px-4 relative overflow-hidden">

        {/* 上波 */}
        <div className="absolute top-0 inset-x-0 pointer-events-none">
          <svg viewBox="0 0 1440 60" preserveAspectRatio="none" className="w-full h-12 md:h-16">
            <path d="M0,30 C360,0 1080,60 1440,30 L1440,0 L0,0 Z" fill="#F5F7FA"/>
          </svg>
        </div>

        {/* 背景ピン写真（薄く） */}
        <div className="absolute inset-0 opacity-10 pointer-events-none">
          <img src={IMG.palms} alt="" className="w-full h-full object-cover" />
        </div>

        <div className="relative max-w-2xl mx-auto text-center pt-8">

          {/* クラブロゴ */}
          <div className="flex justify-center mb-6">
            <img src={IMG.logo} alt="大村モルッククラブ" className="h-24 md:h-28 drop-shadow-lg" />
          </div>

          <SectionHeading en="JOIN US" ja="参加申し込み" />

          <p className="text-[#1A237E] font-bold text-lg md:text-xl mb-2">
            大村で最初のモルックカップ、一緒に作ろう！🎉
          </p>
          <p className="text-[#1A237E]/60 text-sm mb-8 leading-relaxed">
            チームでのご参加はもちろん、個人参加→当日チーム編成も対応可能です。<br />
            お気軽にお問い合わせください。
          </p>

          <div className="mb-12">
            <CTAButton label="今すぐ参加申し込みをする" />
          </div>

          <div className="flex items-center gap-4 mb-8">
            <div className="flex-1 h-px bg-[#1A237E]/20"/>
            <span className="text-[#1A237E]/40 text-xs font-bold tracking-widest uppercase">Contact</span>
            <div className="flex-1 h-px bg-[#1A237E]/20"/>
          </div>

          <p className="text-[#1A237E]/60 text-sm mb-3">お問い合わせはこちら</p>
          <a href={`mailto:${CONTACT_EMAIL}`}
             className="inline-flex items-center gap-3 bg-[#1A237E] text-white font-bold px-6 py-3 rounded-full hover:bg-[#283593] transition-colors shadow-lg">
            <Mail size={16} />
            {CONTACT_EMAIL}
          </a>

          <p className="text-[#1A237E]/40 text-xs">
            © 2026 大村モルッククラブ
          </p>
        </div>
      </section>

    </div>
  )
}
