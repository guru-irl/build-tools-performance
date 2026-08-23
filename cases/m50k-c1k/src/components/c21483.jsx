import React from 'react';
const LABEL_21483 = 'component_21483';
export function Component21483({ value = 21483, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_21483, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_21483, 'data-value': derived.doubled }, children);
}
export default Component21483;
