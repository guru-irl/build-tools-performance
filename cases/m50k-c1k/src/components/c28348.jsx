import React from 'react';
const LABEL_28348 = 'component_28348';
export function Component28348({ value = 28348, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_28348, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_28348, 'data-value': derived.doubled }, children);
}
export default Component28348;
