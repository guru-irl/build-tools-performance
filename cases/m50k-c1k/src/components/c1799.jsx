import React from 'react';
const LABEL_1799 = 'component_1799';
export function Component1799({ value = 1799, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_1799, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_1799, 'data-value': derived.doubled }, children);
}
export default Component1799;
