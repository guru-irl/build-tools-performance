import React from 'react';
const LABEL_13799 = 'component_13799';
export function Component13799({ value = 13799, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_13799, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_13799, 'data-value': derived.doubled }, children);
}
export default Component13799;
