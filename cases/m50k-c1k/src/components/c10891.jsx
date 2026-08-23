import React from 'react';
const LABEL_10891 = 'component_10891';
export function Component10891({ value = 10891, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_10891, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_10891, 'data-value': derived.doubled }, children);
}
export default Component10891;
