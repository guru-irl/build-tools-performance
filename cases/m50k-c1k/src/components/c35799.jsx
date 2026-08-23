import React from 'react';
const LABEL_35799 = 'component_35799';
export function Component35799({ value = 35799, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_35799, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_35799, 'data-value': derived.doubled }, children);
}
export default Component35799;
