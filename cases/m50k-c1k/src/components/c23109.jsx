import React from 'react';
const LABEL_23109 = 'component_23109';
export function Component23109({ value = 23109, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_23109, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_23109, 'data-value': derived.doubled }, children);
}
export default Component23109;
