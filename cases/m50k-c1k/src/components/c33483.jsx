import React from 'react';
const LABEL_33483 = 'component_33483';
export function Component33483({ value = 33483, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_33483, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_33483, 'data-value': derived.doubled }, children);
}
export default Component33483;
