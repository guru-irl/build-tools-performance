import React from 'react';
const LABEL_22891 = 'component_22891';
export function Component22891({ value = 22891, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_22891, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_22891, 'data-value': derived.doubled }, children);
}
export default Component22891;
