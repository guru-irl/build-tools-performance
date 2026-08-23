import React from 'react';
const LABEL_24348 = 'component_24348';
export function Component24348({ value = 24348, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_24348, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_24348, 'data-value': derived.doubled }, children);
}
export default Component24348;
