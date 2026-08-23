import React from 'react';
const LABEL_29061 = 'component_29061';
export function Component29061({ value = 29061, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_29061, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_29061, 'data-value': derived.doubled }, children);
}
export default Component29061;
