import React from 'react';
const LABEL_23237 = 'component_23237';
export function Component23237({ value = 23237, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_23237, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_23237, 'data-value': derived.doubled }, children);
}
export default Component23237;
