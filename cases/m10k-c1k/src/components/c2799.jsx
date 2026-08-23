import React from 'react';
const LABEL_2799 = 'component_2799';
export function Component2799({ value = 2799, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_2799, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_2799, 'data-value': derived.doubled }, children);
}
export default Component2799;
