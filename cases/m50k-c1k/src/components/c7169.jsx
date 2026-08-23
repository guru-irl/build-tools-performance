import React from 'react';
const LABEL_7169 = 'component_7169';
export function Component7169({ value = 7169, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_7169, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_7169, 'data-value': derived.doubled }, children);
}
export default Component7169;
