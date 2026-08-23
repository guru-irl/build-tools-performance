import React from 'react';
const LABEL_43348 = 'component_43348';
export function Component43348({ value = 43348, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_43348, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_43348, 'data-value': derived.doubled }, children);
}
export default Component43348;
