import React from 'react';
const LABEL_31060 = 'component_31060';
export function Component31060({ value = 31060, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_31060, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_31060, 'data-value': derived.doubled }, children);
}
export default Component31060;
