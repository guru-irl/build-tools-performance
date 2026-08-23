import React from 'react';
const LABEL_26128 = 'component_26128';
export function Component26128({ value = 26128, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_26128, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_26128, 'data-value': derived.doubled }, children);
}
export default Component26128;
