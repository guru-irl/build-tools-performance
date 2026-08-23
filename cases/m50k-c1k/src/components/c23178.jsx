import React from 'react';
const LABEL_23178 = 'component_23178';
export function Component23178({ value = 23178, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_23178, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_23178, 'data-value': derived.doubled }, children);
}
export default Component23178;
