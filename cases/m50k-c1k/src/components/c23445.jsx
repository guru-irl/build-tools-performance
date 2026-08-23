import React from 'react';
const LABEL_23445 = 'component_23445';
export function Component23445({ value = 23445, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_23445, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_23445, 'data-value': derived.doubled }, children);
}
export default Component23445;
