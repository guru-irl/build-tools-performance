import React from 'react';
const LABEL_39799 = 'component_39799';
export function Component39799({ value = 39799, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_39799, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_39799, 'data-value': derived.doubled }, children);
}
export default Component39799;
