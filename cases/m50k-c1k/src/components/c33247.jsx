import React from 'react';
const LABEL_33247 = 'component_33247';
export function Component33247({ value = 33247, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_33247, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_33247, 'data-value': derived.doubled }, children);
}
export default Component33247;
