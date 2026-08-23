import React from 'react';
const LABEL_42761 = 'component_42761';
export function Component42761({ value = 42761, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_42761, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_42761, 'data-value': derived.doubled }, children);
}
export default Component42761;
