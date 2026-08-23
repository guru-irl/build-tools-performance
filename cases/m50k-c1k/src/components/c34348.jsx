import React from 'react';
const LABEL_34348 = 'component_34348';
export function Component34348({ value = 34348, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_34348, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_34348, 'data-value': derived.doubled }, children);
}
export default Component34348;
