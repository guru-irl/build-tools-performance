import React from 'react';
const LABEL_32799 = 'component_32799';
export function Component32799({ value = 32799, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_32799, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_32799, 'data-value': derived.doubled }, children);
}
export default Component32799;
