import React from 'react';
const LABEL_2607 = 'component_2607';
export function Component2607({ value = 2607, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_2607, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_2607, 'data-value': derived.doubled }, children);
}
export default Component2607;
