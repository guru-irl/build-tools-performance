import React from 'react';
const LABEL_20348 = 'component_20348';
export function Component20348({ value = 20348, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_20348, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_20348, 'data-value': derived.doubled }, children);
}
export default Component20348;
