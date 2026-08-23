import React from 'react';
const LABEL_32577 = 'component_32577';
export function Component32577({ value = 32577, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_32577, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_32577, 'data-value': derived.doubled }, children);
}
export default Component32577;
