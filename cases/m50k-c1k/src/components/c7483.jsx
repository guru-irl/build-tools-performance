import React from 'react';
const LABEL_7483 = 'component_7483';
export function Component7483({ value = 7483, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_7483, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_7483, 'data-value': derived.doubled }, children);
}
export default Component7483;
