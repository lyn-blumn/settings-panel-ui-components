# Sort UI Badge Component System

이 문서는 Sort UI 디자인 시스템의 Badge 컴포넌트 베리언트를 정리합니다.

## 🎨 Badge 색상 (10개)

Sort UI Badge는 10가지 색상을 지원합니다:

| 색상 | 변수 Prefix | 용도 |
|------|-------------|------|
| **Red** | `--badge-red-*` | 오류, 경고, 삭제 |
| **Orange** | `--badge-orange-*` | 중요, 알림 |
| **Yellow** | `--badge-yellow-*` | 주의, 대기 |
| **Green** | `--badge-green-*` | 성공, 활성 |
| **Teal** | `--badge-teal-*` | 정보, 신규 |
| **Blue** | `--badge-blue-*` | 기본, 일반 |
| **Purple** | `--badge-purple-*` | 프리미엄, 특별 |
| **Pink** | `--badge-pink-*` | 강조, 특수 |
| **Rose** | `--badge-rose-*` | 좋아요, 인기 |
| **Gray** | `--badge-gray-*` | 비활성, 중립 |

---

## 🎭 Badge 스타일 베리언트 (3가지)

### 1. **Soft (기본)**
연한 배경색과 진한 텍스트 색상을 사용합니다.

```tsx
// Soft Blue Badge
<span style={{
  backgroundColor: 'var(--badge-blue-bg)',    // 10% opacity
  color: 'var(--badge-blue-text)',
  borderRadius: 'var(--radius-button)',
  padding: 'var(--spacing-1)',
  fontSize: 'var(--text-xs)',
  fontFamily: 'var(--font-family-suit-medium)'
}}>
  뱃지
</span>
```

### 2. **Outline**
투명 배경에 테두리와 색상 텍스트를 사용합니다.

```tsx
// Outline Blue Badge
<span style={{
  backgroundColor: 'transparent',
  color: 'var(--badge-blue-text)',
  border: '1px solid var(--badge-blue-border)',
  borderRadius: 'var(--radius-button)',
  padding: 'var(--spacing-1)',
  fontSize: 'var(--text-xs)',
  fontFamily: 'var(--font-family-suit-medium)'
}}>
  뱃지
</span>
```

### 3. **Filled (향후 확장 가능)**
단색 배경에 흰색 텍스트를 사용합니다.

```tsx
// Filled Blue Badge (예시)
<span style={{
  backgroundColor: 'var(--badge-blue-text)',
  color: 'var(--background)',
  borderRadius: 'var(--radius-button)',
  padding: 'var(--spacing-1)',
  fontSize: 'var(--text-xs)',
  fontFamily: 'var(--font-family-suit-medium)'
}}>
  뱃지
</span>
```

---

## 📦 CSS 변수 구조

각 색상은 3개의 변수로 구성됩니다:

```css
/* Example: Blue Badge */
--badge-blue-bg: rgba(101, 160, 253, 0.1);      /* 배경색 (10% opacity) */
--badge-blue-text: rgba(33, 71, 221, 1.00);     /* 텍스트 색상 */
--badge-blue-border: rgba(101, 160, 253, 0.3);  /* 테두리 색상 (30% opacity) */
```

### 전체 색상 변수

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

---

## 🚀 사용 예시

### Soft Style (연한 배경)

```tsx
// Red Soft Badge
<span style={{
  backgroundColor: 'var(--badge-red-bg)',
  color: 'var(--badge-red-text)',
  borderRadius: 'var(--radius-button)',
  padding: 'var(--spacing-1) var(--spacing-2)',
  fontSize: 'var(--text-xs)',
  fontFamily: 'var(--font-family-suit-medium)',
  lineHeight: '16px',
  letterSpacing: '-0.25px'
}}>
  오류
</span>

// Green Soft Badge
<span style={{
  backgroundColor: 'var(--badge-green-bg)',
  color: 'var(--badge-green-text)',
  borderRadius: 'var(--radius-button)',
  padding: 'var(--spacing-1) var(--spacing-2)',
  fontSize: 'var(--text-xs)',
  fontFamily: 'var(--font-family-suit-medium)'
}}>
  성공
</span>

// Blue Soft Badge (Default)
<span style={{
  backgroundColor: 'var(--badge-blue-bg)',
  color: 'var(--badge-blue-text)',
  borderRadius: 'var(--radius-button)',
  padding: 'var(--spacing-1) var(--spacing-2)',
  fontSize: 'var(--text-xs)',
  fontFamily: 'var(--font-family-suit-medium)'
}}>
  정보
</span>
```

### Outline Style (테두리만)

```tsx
// Red Outline Badge
<span style={{
  backgroundColor: 'transparent',
  color: 'var(--badge-red-text)',
  border: '1px solid var(--badge-red-border)',
  borderRadius: 'var(--radius-button)',
  padding: 'var(--spacing-1) var(--spacing-2)',
  fontSize: 'var(--text-xs)',
  fontFamily: 'var(--font-family-suit-medium)'
}}>
  오류
</span>

// Purple Outline Badge
<span style={{
  backgroundColor: 'transparent',
  color: 'var(--badge-purple-text)',
  border: '1px solid var(--badge-purple-border)',
  borderRadius: 'var(--radius-button)',
  padding: 'var(--spacing-1) var(--spacing-2)',
  fontSize: 'var(--text-xs)',
  fontFamily: 'var(--font-family-suit-medium)'
}}>
  프리미엄
</span>
```

### 아이콘이 있는 Badge

```tsx
import { Circle, Check, AlertCircle } from 'lucide-react';

// With Leading Icon
<span style={{
  backgroundColor: 'var(--badge-green-bg)',
  color: 'var(--badge-green-text)',
  borderRadius: 'var(--radius-button)',
  padding: 'var(--spacing-1) var(--spacing-2)',
  fontSize: 'var(--text-xs)',
  fontFamily: 'var(--font-family-suit-medium)',
  display: 'inline-flex',
  alignItems: 'center',
  gap: 'var(--spacing-1)'
}}>
  <Check size={12} />
  완료
</span>

// With Trailing Icon
<span style={{
  backgroundColor: 'var(--badge-red-bg)',
  color: 'var(--badge-red-text)',
  borderRadius: 'var(--radius-button)',
  padding: 'var(--spacing-1) var(--spacing-2)',
  fontSize: 'var(--text-xs)',
  fontFamily: 'var(--font-family-suit-medium)',
  display: 'inline-flex',
  alignItems: 'center',
  gap: 'var(--spacing-1)'
}}>
  오류
  <AlertCircle size={12} />
</span>
```

---

## 🎯 빠른 참조 (Quick Reference)

말로 색상이나 스타일을 요청하면 즉시 적용할 수 있도록 매핑:

### 색상 매핑
- "빨강", "red", "에러", "오류" → `red`
- "주황", "orange" → `orange`
- "노랑", "yellow", "경고" → `yellow`
- "초록", "green", "성공", "완료" → `green`
- "청록", "teal", "정보" → `teal`
- "파랑", "blue", "기본" → `blue`
- "보라", "purple", "프리미엄" → `purple`
- "핑크", "pink" → `pink`
- "로즈", "rose", "인기" → `rose`
- "회색", "gray", "비활성" → `gray`

### 스타일 매핑
- "소프트", "soft", "연한", "기본" → Soft style
- "아웃라인", "outline", "테두리" → Outline style
- "채움", "filled", "단색" → Filled style

---

## 📐 Badge 기본 스타일 규격

```css
/* 공통 속성 */
font-family: var(--font-family-suit-medium);
font-size: var(--text-xs);           /* 12px */
line-height: 16px;
letter-spacing: -0.25px;
border-radius: var(--radius-button); /* 6px */
padding: var(--spacing-1) var(--spacing-2); /* 4px 8px */
display: inline-flex;
align-items: center;
white-space: nowrap;

/* 아이콘이 있을 때 */
gap: var(--spacing-1); /* 4px */
```

---

## 💡 사용 가이드라인

### ✅ DO
- 상태를 나타낼 때는 적절한 색상 사용 (성공=green, 오류=red)
- 짧은 텍스트나 숫자 표시에 사용
- 아이콘과 함께 사용하여 의미 강조
- 일관된 스타일 베리언트 사용

### ❌ DON'T
- 긴 텍스트 사용 금지 (최대 2-3 단어)
- 클릭 가능한 요소로 사용 금지 (Button 사용)
- 너무 많은 Badge를 한 곳에 배치
- 하드코딩된 색상 값 사용 금지

---

## 🔧 Helper 함수 (향후 구현 가능)

```typescript
type BadgeColor = 'red' | 'orange' | 'yellow' | 'green' | 'teal' | 'blue' | 'purple' | 'pink' | 'rose' | 'gray';
type BadgeVariant = 'soft' | 'outline' | 'filled';

function getBadgeStyle(color: BadgeColor, variant: BadgeVariant = 'soft') {
  const baseStyle = {
    borderRadius: 'var(--radius-button)',
    padding: 'var(--spacing-1) var(--spacing-2)',
    fontSize: 'var(--text-xs)',
    fontFamily: 'var(--font-family-suit-medium)',
    lineHeight: '16px',
    letterSpacing: '-0.25px',
    display: 'inline-flex',
    alignItems: 'center',
  };

  if (variant === 'soft') {
    return {
      ...baseStyle,
      backgroundColor: `var(--badge-${color}-bg)`,
      color: `var(--badge-${color}-text)`,
    };
  } else if (variant === 'outline') {
    return {
      ...baseStyle,
      backgroundColor: 'transparent',
      color: `var(--badge-${color}-text)`,
      border: `1px solid var(--badge-${color}-border)`,
    };
  } else if (variant === 'filled') {
    return {
      ...baseStyle,
      backgroundColor: `var(--badge-${color}-text)`,
      color: 'var(--background)',
    };
  }
}
```

---

**마지막 업데이트:** 2026-04-02  
**버전:** 1.0.0  
**총 베리언트:** 10 colors × 3 styles × 3 icon positions = 90+ variants
