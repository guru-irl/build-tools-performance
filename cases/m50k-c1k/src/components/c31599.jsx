import React from 'react';
const LABEL_31599 = 'component_31599';
export function Component31599({ value = 31599, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_31599, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_31599, 'data-value': derived.doubled }, children);
}
export default Component31599;
