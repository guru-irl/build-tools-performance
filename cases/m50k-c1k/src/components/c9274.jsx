import React from 'react';
const LABEL_9274 = 'component_9274';
export function Component9274({ value = 9274, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_9274, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_9274, 'data-value': derived.doubled }, children);
}
export default Component9274;
