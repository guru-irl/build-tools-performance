import React from 'react';
const LABEL_21234 = 'component_21234';
export function Component21234({ value = 21234, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_21234, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_21234, 'data-value': derived.doubled }, children);
}
export default Component21234;
