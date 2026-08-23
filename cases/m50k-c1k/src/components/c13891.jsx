import React from 'react';
const LABEL_13891 = 'component_13891';
export function Component13891({ value = 13891, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_13891, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_13891, 'data-value': derived.doubled }, children);
}
export default Component13891;
