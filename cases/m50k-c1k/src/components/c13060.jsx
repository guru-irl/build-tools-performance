import React from 'react';
const LABEL_13060 = 'component_13060';
export function Component13060({ value = 13060, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_13060, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_13060, 'data-value': derived.doubled }, children);
}
export default Component13060;
