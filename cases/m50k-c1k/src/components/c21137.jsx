import React from 'react';
const LABEL_21137 = 'component_21137';
export function Component21137({ value = 21137, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_21137, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_21137, 'data-value': derived.doubled }, children);
}
export default Component21137;
