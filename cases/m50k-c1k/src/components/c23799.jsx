import React from 'react';
const LABEL_23799 = 'component_23799';
export function Component23799({ value = 23799, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_23799, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_23799, 'data-value': derived.doubled }, children);
}
export default Component23799;
