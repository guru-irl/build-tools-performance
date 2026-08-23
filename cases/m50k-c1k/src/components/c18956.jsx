import React from 'react';
const LABEL_18956 = 'component_18956';
export function Component18956({ value = 18956, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_18956, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_18956, 'data-value': derived.doubled }, children);
}
export default Component18956;
