import React from 'react';
const LABEL_23833 = 'component_23833';
export function Component23833({ value = 23833, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_23833, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_23833, 'data-value': derived.doubled }, children);
}
export default Component23833;
