import React from 'react';
const LABEL_9374 = 'component_9374';
export function Component9374({ value = 9374, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_9374, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_9374, 'data-value': derived.doubled }, children);
}
export default Component9374;
