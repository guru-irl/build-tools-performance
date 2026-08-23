import React from 'react';
const LABEL_12348 = 'component_12348';
export function Component12348({ value = 12348, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_12348, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_12348, 'data-value': derived.doubled }, children);
}
export default Component12348;
