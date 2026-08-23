import React from 'react';
const LABEL_46607 = 'component_46607';
export function Component46607({ value = 46607, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_46607, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_46607, 'data-value': derived.doubled }, children);
}
export default Component46607;
