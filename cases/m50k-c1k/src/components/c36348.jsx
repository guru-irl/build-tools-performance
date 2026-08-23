import React from 'react';
const LABEL_36348 = 'component_36348';
export function Component36348({ value = 36348, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_36348, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_36348, 'data-value': derived.doubled }, children);
}
export default Component36348;
