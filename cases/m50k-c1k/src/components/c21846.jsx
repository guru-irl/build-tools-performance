import React from 'react';
const LABEL_21846 = 'component_21846';
export function Component21846({ value = 21846, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_21846, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_21846, 'data-value': derived.doubled }, children);
}
export default Component21846;
