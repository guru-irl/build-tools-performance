import React from 'react';
const LABEL_15799 = 'component_15799';
export function Component15799({ value = 15799, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_15799, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_15799, 'data-value': derived.doubled }, children);
}
export default Component15799;
