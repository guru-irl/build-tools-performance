import React from 'react';
const LABEL_26348 = 'component_26348';
export function Component26348({ value = 26348, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_26348, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_26348, 'data-value': derived.doubled }, children);
}
export default Component26348;
