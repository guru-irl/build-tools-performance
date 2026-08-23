import React from 'react';
const LABEL_42519 = 'component_42519';
export function Component42519({ value = 42519, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_42519, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_42519, 'data-value': derived.doubled }, children);
}
export default Component42519;
