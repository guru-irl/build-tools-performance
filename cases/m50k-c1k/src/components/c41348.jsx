import React from 'react';
const LABEL_41348 = 'component_41348';
export function Component41348({ value = 41348, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_41348, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_41348, 'data-value': derived.doubled }, children);
}
export default Component41348;
