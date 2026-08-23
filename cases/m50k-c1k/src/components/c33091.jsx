import React from 'react';
const LABEL_33091 = 'component_33091';
export function Component33091({ value = 33091, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_33091, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_33091, 'data-value': derived.doubled }, children);
}
export default Component33091;
