import React from 'react';
const LABEL_22483 = 'component_22483';
export function Component22483({ value = 22483, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_22483, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_22483, 'data-value': derived.doubled }, children);
}
export default Component22483;
