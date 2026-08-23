import React from 'react';
const LABEL_12799 = 'component_12799';
export function Component12799({ value = 12799, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_12799, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_12799, 'data-value': derived.doubled }, children);
}
export default Component12799;
