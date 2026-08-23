import React from 'react';
const LABEL_9184 = 'component_9184';
export function Component9184({ value = 9184, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_9184, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_9184, 'data-value': derived.doubled }, children);
}
export default Component9184;
