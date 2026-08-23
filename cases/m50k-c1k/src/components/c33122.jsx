import React from 'react';
const LABEL_33122 = 'component_33122';
export function Component33122({ value = 33122, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_33122, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_33122, 'data-value': derived.doubled }, children);
}
export default Component33122;
