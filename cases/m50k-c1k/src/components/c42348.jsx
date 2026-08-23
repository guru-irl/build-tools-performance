import React from 'react';
const LABEL_42348 = 'component_42348';
export function Component42348({ value = 42348, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_42348, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_42348, 'data-value': derived.doubled }, children);
}
export default Component42348;
