import React from 'react';
const LABEL_847 = 'component_847';
export function Component847({ value = 847, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_847, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_847, 'data-value': derived.doubled }, children);
}
export default Component847;
