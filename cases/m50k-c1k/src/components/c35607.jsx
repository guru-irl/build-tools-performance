import React from 'react';
const LABEL_35607 = 'component_35607';
export function Component35607({ value = 35607, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_35607, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_35607, 'data-value': derived.doubled }, children);
}
export default Component35607;
