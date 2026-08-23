import React from 'react';
const LABEL_6095 = 'component_6095';
export function Component6095({ value = 6095, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_6095, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_6095, 'data-value': derived.doubled }, children);
}
export default Component6095;
