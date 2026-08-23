import React from 'react';
const LABEL_9799 = 'component_9799';
export function Component9799({ value = 9799, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_9799, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_9799, 'data-value': derived.doubled }, children);
}
export default Component9799;
