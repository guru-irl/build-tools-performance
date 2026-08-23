import React from 'react';
const LABEL_7348 = 'component_7348';
export function Component7348({ value = 7348, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_7348, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_7348, 'data-value': derived.doubled }, children);
}
export default Component7348;
