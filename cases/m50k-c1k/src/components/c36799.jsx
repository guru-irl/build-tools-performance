import React from 'react';
const LABEL_36799 = 'component_36799';
export function Component36799({ value = 36799, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_36799, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_36799, 'data-value': derived.doubled }, children);
}
export default Component36799;
