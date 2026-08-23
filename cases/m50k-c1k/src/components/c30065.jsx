import React from 'react';
const LABEL_30065 = 'component_30065';
export function Component30065({ value = 30065, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_30065, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_30065, 'data-value': derived.doubled }, children);
}
export default Component30065;
