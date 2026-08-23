import React from 'react';
const LABEL_10607 = 'component_10607';
export function Component10607({ value = 10607, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_10607, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_10607, 'data-value': derived.doubled }, children);
}
export default Component10607;
