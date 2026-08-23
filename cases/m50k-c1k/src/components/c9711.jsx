import React from 'react';
const LABEL_9711 = 'component_9711';
export function Component9711({ value = 9711, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_9711, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_9711, 'data-value': derived.doubled }, children);
}
export default Component9711;
