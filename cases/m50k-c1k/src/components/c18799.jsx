import React from 'react';
const LABEL_18799 = 'component_18799';
export function Component18799({ value = 18799, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_18799, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_18799, 'data-value': derived.doubled }, children);
}
export default Component18799;
