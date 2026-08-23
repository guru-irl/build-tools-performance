import React from 'react';
const LABEL_31274 = 'component_31274';
export function Component31274({ value = 31274, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_31274, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_31274, 'data-value': derived.doubled }, children);
}
export default Component31274;
