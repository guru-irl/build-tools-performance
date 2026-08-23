import React from 'react';
const LABEL_4095 = 'component_4095';
export function Component4095({ value = 4095, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_4095, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_4095, 'data-value': derived.doubled }, children);
}
export default Component4095;
