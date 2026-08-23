import React from 'react';
const LABEL_16754 = 'component_16754';
export function Component16754({ value = 16754, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_16754, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_16754, 'data-value': derived.doubled }, children);
}
export default Component16754;
