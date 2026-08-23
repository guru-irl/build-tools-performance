import React from 'react';
const LABEL_35273 = 'component_35273';
export function Component35273({ value = 35273, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_35273, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_35273, 'data-value': derived.doubled }, children);
}
export default Component35273;
