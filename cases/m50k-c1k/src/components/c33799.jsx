import React from 'react';
const LABEL_33799 = 'component_33799';
export function Component33799({ value = 33799, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_33799, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_33799, 'data-value': derived.doubled }, children);
}
export default Component33799;
