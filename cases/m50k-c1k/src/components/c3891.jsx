import React from 'react';
const LABEL_3891 = 'component_3891';
export function Component3891({ value = 3891, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_3891, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_3891, 'data-value': derived.doubled }, children);
}
export default Component3891;
