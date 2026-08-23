import React from 'react';
const LABEL_36607 = 'component_36607';
export function Component36607({ value = 36607, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_36607, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_36607, 'data-value': derived.doubled }, children);
}
export default Component36607;
