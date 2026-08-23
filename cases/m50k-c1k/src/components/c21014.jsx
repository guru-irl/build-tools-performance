import React from 'react';
const LABEL_21014 = 'component_21014';
export function Component21014({ value = 21014, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_21014, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_21014, 'data-value': derived.doubled }, children);
}
export default Component21014;
