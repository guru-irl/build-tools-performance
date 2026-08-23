import React from 'react';
const LABEL_42517 = 'component_42517';
export function Component42517({ value = 42517, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_42517, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_42517, 'data-value': derived.doubled }, children);
}
export default Component42517;
