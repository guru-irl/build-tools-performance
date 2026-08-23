import React from 'react';
const LABEL_33607 = 'component_33607';
export function Component33607({ value = 33607, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_33607, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_33607, 'data-value': derived.doubled }, children);
}
export default Component33607;
