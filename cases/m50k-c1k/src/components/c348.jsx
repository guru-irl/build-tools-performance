import React from 'react';
const LABEL_348 = 'component_348';
export function Component348({ value = 348, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_348, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_348, 'data-value': derived.doubled }, children);
}
export default Component348;
