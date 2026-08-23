import React from 'react';
const LABEL_3578 = 'component_3578';
export function Component3578({ value = 3578, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_3578, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_3578, 'data-value': derived.doubled }, children);
}
export default Component3578;
