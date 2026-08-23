import React from 'react';
const LABEL_23483 = 'component_23483';
export function Component23483({ value = 23483, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_23483, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_23483, 'data-value': derived.doubled }, children);
}
export default Component23483;
