import React from 'react';
const LABEL_23269 = 'component_23269';
export function Component23269({ value = 23269, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_23269, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_23269, 'data-value': derived.doubled }, children);
}
export default Component23269;
