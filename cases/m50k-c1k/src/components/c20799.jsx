import React from 'react';
const LABEL_20799 = 'component_20799';
export function Component20799({ value = 20799, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_20799, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_20799, 'data-value': derived.doubled }, children);
}
export default Component20799;
