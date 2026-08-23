import React from 'react';
const LABEL_9607 = 'component_9607';
export function Component9607({ value = 9607, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_9607, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_9607, 'data-value': derived.doubled }, children);
}
export default Component9607;
