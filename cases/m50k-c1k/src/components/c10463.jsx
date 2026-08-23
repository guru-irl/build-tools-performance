import React from 'react';
const LABEL_10463 = 'component_10463';
export function Component10463({ value = 10463, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_10463, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_10463, 'data-value': derived.doubled }, children);
}
export default Component10463;
