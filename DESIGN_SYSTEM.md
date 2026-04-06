# Sort UI Design System Variables

이 문서는 피그마메이크 엔진 설정 패널 라이브러리에서 사용하는 모든 디자인 시스템 변수들을 정리합니다.

## 📊 변수 개요

- **Colors**: 449개 (semantic tokens)
- **Font Family**: 4개
- **Font Size**: 39개 
- **Radius**: 15개
- **Spacing**: 35개
- **Stroke**: 6개

---

## 📏 Spacing Variables (35개)

모든 spacing 값은 4px 기반 그리드 시스템을 따릅니다.

```css
--spacing-0: 0px;
--spacing-0-5: 2px;
--spacing-1: 4px;
--spacing-1-5: 6px;
--spacing-2: 8px;
--spacing-2-5: 10px;
--spacing-3: 12px;
--spacing-3-5: 14px;
--spacing-4: 16px;
--spacing-4-5: 18px;
--spacing-5: 20px;
--spacing-6: 24px;
--spacing-7: 28px;
--spacing-8: 32px;
--spacing-9: 36px;
--spacing-10: 40px;
--spacing-11: 44px;
--spacing-12: 48px;
--spacing-14: 56px;
--spacing-16: 64px;
--spacing-20: 80px;
--spacing-24: 96px;
--spacing-28: 112px;
--spacing-32: 128px;
--spacing-36: 144px;
--spacing-40: 160px;
--spacing-44: 176px;
--spacing-48: 192px;
--spacing-52: 208px;
--spacing-56: 224px;
--spacing-60: 240px;
--spacing-64: 256px;
--spacing-72: 288px;
--spacing-80: 320px;
--spacing-96: 384px;
```

### 사용 예시
```tsx
// ✅ 올바른 사용
<div style={{ padding: 'var(--spacing-2)' }}>...</div>
<div style={{ gap: 'var(--spacing-1-5)' }}>...</div>

// ❌ 잘못된 사용
<div style={{ padding: '8px' }}>...</div>
<div style={{ gap: '6px' }}>...</div>
```

---

## 🖌️ Stroke (Border Width) Variables (6개)

```css
--stroke-none: 0px;         /* 테두리 없음 */
--stroke-hairline: 0.5px;   /* 매우 얇은 선 */
--stroke-thin: 1px;         /* 기본 얇은 선 */
--stroke-regular: 1.5px;    /* 일반 선 */
--stroke-thick: 2px;        /* 두꺼운 선 */
--stroke-heavy: 3px;        /* 매우 두꺼운 선 */
```

### 사용 예시
```tsx
// ✅ 올바른 사용
<div style={{ borderWidth: 'var(--stroke-thin)' }}>...</div>

// ❌ 잘못된 사용
<div style={{ borderWidth: '1px' }}>...</div>
```

---

## 🎨 Color Variables (449개 - Semantic Tokens)

### Primary Colors
```css
--background: rgba(255, 255, 255, 1.00);
--foreground: rgba(17, 17, 21, 1.00);
--primary: rgba(67, 125, 252, 1.00);
--primary-foreground: rgba(255, 255, 255, 1.00);
--secondary: rgba(255, 255, 255, 1.00);
--secondary-foreground: rgba(17, 17, 21, 1.00);
```

### State Colors
```css
--muted: rgba(39, 39, 42, 0.06);
--muted-foreground: rgba(111, 111, 119, 1.00);
--accent: rgba(67, 125, 252, 1.00);
--accent-foreground: rgba(255, 255, 255, 1.00);
--destructive: rgba(231, 67, 65, 1.00);
--destructive-foreground: rgba(255, 255, 255, 1.00);
```

### UI Element Colors
```css
--border: rgba(39, 39, 42, 0.15);
--input: rgba(255, 255, 255, 1.00);
--input-background: rgba(255, 255, 255, 1.00);
--ring: rgba(101, 160, 253, 0.40);
```

### Sidebar Colors
```css
--sidebar: rgba(255, 255, 255, 1.00);
--sidebar-foreground: rgba(78, 78, 85, 1.00);
--sidebar-primary: rgba(67, 125, 252, 1.00);
--sidebar-border: rgba(39, 39, 42, 0.10);
```

### Chart Colors
```css
--chart-1: rgba(24, 24, 27, 1.00);
--chart-2: rgba(67, 125, 252, 1.00);
--chart-3: rgba(79, 198, 96, 1.00);
--chart-4: rgba(242, 115, 19, 1.00);
--chart-5: rgba(231, 67, 65, 1.00);
```

### Badge Colors (10 colors × 3 variables each = 30 tokens)

각 Badge 색상은 3가지 변수를 가집니다:
- `*-bg`: 배경색 (10% opacity)
- `*-text`: 텍스트 색상
- `*-border`: 테두리 색상 (30% opacity)

```css
/* Red */
--badge-red-bg: rgba(231, 67, 65, 0.1);
--badge-red-text: rgba(185, 28, 28, 1.00);
--badge-red-border: rgba(231, 67, 65, 0.3);

/* Orange */
--badge-orange-bg: rgba(242, 115, 19, 0.1);
--badge-orange-text: rgba(194, 65, 12, 1.00);
--badge-orange-border: rgba(242, 115, 19, 0.3);

/* Yellow */
--badge-yellow-bg: rgba(250, 204, 21, 0.15);
--badge-yellow-text: rgba(161, 98, 7, 1.00);
--badge-yellow-border: rgba(250, 204, 21, 0.4);

/* Green */
--badge-green-bg: rgba(79, 198, 96, 0.1);
--badge-green-text: rgba(21, 128, 61, 1.00);
--badge-green-border: rgba(79, 198, 96, 0.3);

/* Teal */
--badge-teal-bg: rgba(20, 184, 166, 0.1);
--badge-teal-text: rgba(15, 118, 110, 1.00);
--badge-teal-border: rgba(20, 184, 166, 0.3);

/* Blue */
--badge-blue-bg: rgba(101, 160, 253, 0.1);
--badge-blue-text: rgba(33, 71, 221, 1.00);
--badge-blue-border: rgba(101, 160, 253, 0.3);

/* Purple */
--badge-purple-bg: rgba(168, 85, 247, 0.1);
--badge-purple-text: rgba(126, 34, 206, 1.00);
--badge-purple-border: rgba(168, 85, 247, 0.3);

/* Pink */
--badge-pink-bg: rgba(236, 72, 153, 0.1);
--badge-pink-text: rgba(190, 24, 93, 1.00);
--badge-pink-border: rgba(236, 72, 153, 0.3);

/* Rose */
--badge-rose-bg: rgba(251, 113, 133, 0.1);
--badge-rose-text: rgba(225, 29, 72, 1.00);
--badge-rose-border: rgba(251, 113, 133, 0.3);

/* Gray */
--badge-gray-bg: rgba(161, 161, 170, 0.1);
--badge-gray-text: rgba(63, 63, 70, 1.00);
--badge-gray-border: rgba(161, 161, 170, 0.3);
```

**📖 상세 가이드**: `/BADGE_SYSTEM.md` 참조

---

## ✍️ Typography Variables

### Font Sizes (39개)
```css
--text-2xs: 10px;
--text-xs: 12px;
--text-sm: 14px;
--text-base: 16px;
--text-lg: 18px;
--text-xl: 20px;
--text-2xl: 24px;
--text-3xl: 30px;
--text-4xl: 36px;
--text-5xl: 48px;
--text-6xl: 60px;
--text-7xl: 72px;
```

### Line Heights
```css
--leading-none: 1;
--leading-tight: 1.25;
--leading-snug: 1.375;
--leading-normal: 1.5;
--leading-relaxed: 1.625;
--leading-loose: 2;
```

### Letter Spacing
```css
--tracking-tighter: -0.05em;
--tracking-tight: -0.025em;
--tracking-normal: 0em;
--tracking-wide: 0.025em;
--tracking-wider: 0.05em;
--tracking-widest: 0.1em;
```

### Font Weights
```css
--font-weight-thin: 100;
--font-weight-extralight: 200;
--font-weight-light: 300;
--font-weight-normal: 400;
--font-weight-medium: 500;
--font-weight-semibold: 600;
--font-weight-bold: 700;
--font-weight-extrabold: 800;
--font-weight-black: 900;
```

### Font Family (4개)
```css
--font-family-suit: 'SUIT', sans-serif;
--font-family-suit-regular: 'SUIT:Regular', sans-serif;
--font-family-suit-medium: 'SUIT:Medium', sans-serif;
--font-family-suit-semibold: 'SUIT:SemiBold', sans-serif;
```

### 사용 예시
```tsx
// ✅ 올바른 사용
<p style={{ 
  fontFamily: 'var(--font-family-suit-medium)',
  fontSize: 'var(--text-sm)',
  fontWeight: 'var(--font-weight-medium)'
}}>텍스트</p>

// ❌ 잘못된 사용
<p style={{ 
  fontFamily: 'SUIT',
  fontSize: '14px',
  fontWeight: 500
}}>텍스트</p>
```

---

## 📐 Radius Variables (15개)

```css
/* Scale tokens */
--radius-none: 0px;
--radius-sm: 2px;
--radius-default: 4px;
--radius-md: 5px;
--radius-lg: 6px;
--radius-xl: 8px;
--radius-2xl: 10px;
--radius-3xl: 12px;
--radius-full: 9999px;

/* Semantic tokens */
--radius: 6px;              /* 기본 */
--radius-button: 6px;       /* 버튼 */
--radius-card: 6px;         /* 카드/컨테이너 */
--radius-input: 5px;        /* 입력 필드 */
--radius-badge: 4px;        /* 배지 */
--radius-tooltip: 4px;      /* 툴팁/팝오버 */
```

---

## 🎭 Shadows

```css
--elevation-sm: 0px 1px 2px 0px rgba(0, 0, 0, 0.08);
```

---

## 🌓 Dark Mode

모든 색상 변수는 `.dark` 클래스에서 자동으로 대응되는 다크 모드 값을 가집니다.

```css
.dark {
  --background: rgba(17, 17, 21, 1.00);
  --foreground: rgba(255, 255, 255, 1.00);
  --card: rgba(24, 24, 27, 1.00);
  --muted: rgba(39, 39, 42, 0.30);
  --border: rgba(39, 39, 42, 0.50);
  /* ... */
}
```

---

## 📋 사용 규칙

### ✅ DO
- 모든 spacing 값은 `--spacing-*` 변수 사용
- 모든 색상은 semantic color 변수 사용
- 모든 타이포그래피는 `--text-*`, `--font-*` 변수 사용
- 모든 border-width는 `--stroke-*` 변수 사용
- 모든 border-radius는 `--radius-*` 변수 사용

### ❌ DON'T
- 임의의 픽셀 값 하드코딩 금지 (예: `padding: '8px'`)
- 임의의 색상 값 하드코딩 금지 (예: `color: '#437DFC'`)
- 디자인 시스템 외의 폰트 사용 금지
- 인라인 스타일 최소화, 가능한 CSS 변수 사용

---

## 🔧 Tailwind 통합

모든 변수는 Tailwind CSS v4의 `@theme inline`을 통해 Tailwind 클래스로도 사용 가능합니다:

```tsx
// CSS 변수
<div style={{ padding: 'var(--spacing-4)' }} />

// Tailwind 클래스 (권장)
<div className="p-[--spacing-4]" />
```

---

## 📚 컴포넌트 라이브러리 규칙

1. **모든 UI 컴포넌트는 디자인 시스템 변수만 사용**
2. **인라인 스타일 사용 시 CSS 변수 필수**
3. **새로운 spacing이나 색상이 필요한 경우, 디자인 시스템에 먼저 추가**
4. **모든 변경사항은 `/src/styles/theme.css`를 통해 일괄 관리**
5. **임포트된 Figma 컴포넌트도 디자인 시스템 변수로 변환 필수**

---

## 🔍 주요 사용 패턴

### Button 간격
```tsx
// gap: 6px → var(--spacing-1-5)
// padding: 12px 8px → var(--spacing-3) var(--spacing-2)
<button style={{ 
  gap: 'var(--spacing-1-5)',
  paddingLeft: 'var(--spacing-3)',
  paddingRight: 'var(--spacing-3)',
  paddingTop: 'var(--spacing-2)',
  paddingBottom: 'var(--spacing-2)'
}}>...</button>
```

### Input 간격
```tsx
// padding: 8px 12px → var(--spacing-2) var(--spacing-3)
<input style={{ 
  paddingTop: 'var(--spacing-2)',
  paddingBottom: 'var(--spacing-2)',
  paddingLeft: 'var(--spacing-3)',
  paddingRight: 'var(--spacing-3)'
}} />
```

### Badge
```tsx
// height: 20px, padding: 4px → var(--spacing-5), var(--spacing-1)
<span style={{ 
  height: 'var(--spacing-5)',
  paddingLeft: 'var(--spacing-1)',
  paddingRight: 'var(--spacing-1)',
  borderRadius: 'var(--radius-badge)'
}}>...</span>
```

---

**마지막 업데이트:** 2026-04-02  
**버전:** 1.1.0  
**변수 통계:** 35 spacing + 6 stroke + 15 radius + 39 font sizes + 449 colors