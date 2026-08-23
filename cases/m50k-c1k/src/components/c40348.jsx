import React from 'react';
const LABEL_40348 = 'component_40348';
export function Component40348({ value = 40348, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_40348, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_40348, 'data-value': derived.doubled }, children);
}
export default Component40348;
