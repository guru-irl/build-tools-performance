import React from 'react';
const LABEL_21003 = 'component_21003';
export function Component21003({ value = 21003, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_21003, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_21003, 'data-value': derived.doubled }, children);
}
export default Component21003;
