import React from 'react';
const LABEL_6858 = 'component_6858';
export function Component6858({ value = 6858, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_6858, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_6858, 'data-value': derived.doubled }, children);
}
export default Component6858;
