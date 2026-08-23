import React from 'react';
const LABEL_23607 = 'component_23607';
export function Component23607({ value = 23607, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_23607, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_23607, 'data-value': derived.doubled }, children);
}
export default Component23607;
