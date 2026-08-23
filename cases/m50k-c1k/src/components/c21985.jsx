import React from 'react';
const LABEL_21985 = 'component_21985';
export function Component21985({ value = 21985, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_21985, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_21985, 'data-value': derived.doubled }, children);
}
export default Component21985;
