import React from 'react';
const LABEL_31799 = 'component_31799';
export function Component31799({ value = 31799, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_31799, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_31799, 'data-value': derived.doubled }, children);
}
export default Component31799;
