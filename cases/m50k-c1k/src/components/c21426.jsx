import React from 'react';
const LABEL_21426 = 'component_21426';
export function Component21426({ value = 21426, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_21426, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_21426, 'data-value': derived.doubled }, children);
}
export default Component21426;
