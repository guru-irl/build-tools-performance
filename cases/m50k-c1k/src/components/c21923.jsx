import React from 'react';
const LABEL_21923 = 'component_21923';
export function Component21923({ value = 21923, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_21923, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_21923, 'data-value': derived.doubled }, children);
}
export default Component21923;
