import React from 'react';
const LABEL_21134 = 'component_21134';
export function Component21134({ value = 21134, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_21134, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_21134, 'data-value': derived.doubled }, children);
}
export default Component21134;
