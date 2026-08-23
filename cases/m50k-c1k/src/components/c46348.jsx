import React from 'react';
const LABEL_46348 = 'component_46348';
export function Component46348({ value = 46348, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_46348, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_46348, 'data-value': derived.doubled }, children);
}
export default Component46348;
