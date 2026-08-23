import React from 'react';
const LABEL_21891 = 'component_21891';
export function Component21891({ value = 21891, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_21891, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_21891, 'data-value': derived.doubled }, children);
}
export default Component21891;
