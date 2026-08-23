import React from 'react';
const LABEL_23512 = 'component_23512';
export function Component23512({ value = 23512, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_23512, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_23512, 'data-value': derived.doubled }, children);
}
export default Component23512;
