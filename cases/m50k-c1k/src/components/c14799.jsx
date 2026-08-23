import React from 'react';
const LABEL_14799 = 'component_14799';
export function Component14799({ value = 14799, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_14799, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_14799, 'data-value': derived.doubled }, children);
}
export default Component14799;
