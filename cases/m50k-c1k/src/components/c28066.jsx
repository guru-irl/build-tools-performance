import React from 'react';
const LABEL_28066 = 'component_28066';
export function Component28066({ value = 28066, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_28066, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_28066, 'data-value': derived.doubled }, children);
}
export default Component28066;
