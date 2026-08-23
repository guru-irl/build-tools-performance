import React from 'react';
const LABEL_27079 = 'component_27079';
export function Component27079({ value = 27079, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_27079, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_27079, 'data-value': derived.doubled }, children);
}
export default Component27079;
