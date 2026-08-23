import React from 'react';
const LABEL_1348 = 'component_1348';
export function Component1348({ value = 1348, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_1348, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_1348, 'data-value': derived.doubled }, children);
}
export default Component1348;
