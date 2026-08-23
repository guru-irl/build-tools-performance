import React from 'react';
const LABEL_35348 = 'component_35348';
export function Component35348({ value = 35348, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_35348, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_35348, 'data-value': derived.doubled }, children);
}
export default Component35348;
