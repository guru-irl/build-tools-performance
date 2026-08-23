import React from 'react';
const LABEL_40809 = 'component_40809';
export function Component40809({ value = 40809, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_40809, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_40809, 'data-value': derived.doubled }, children);
}
export default Component40809;
