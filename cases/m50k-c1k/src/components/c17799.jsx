import React from 'react';
const LABEL_17799 = 'component_17799';
export function Component17799({ value = 17799, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_17799, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_17799, 'data-value': derived.doubled }, children);
}
export default Component17799;
