import React from 'react';
const LABEL_35551 = 'component_35551';
export function Component35551({ value = 35551, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_35551, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_35551, 'data-value': derived.doubled }, children);
}
export default Component35551;
