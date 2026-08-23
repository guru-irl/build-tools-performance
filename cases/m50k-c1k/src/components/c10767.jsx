import React from 'react';
const LABEL_10767 = 'component_10767';
export function Component10767({ value = 10767, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_10767, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_10767, 'data-value': derived.doubled }, children);
}
export default Component10767;
