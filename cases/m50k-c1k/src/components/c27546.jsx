import React from 'react';
const LABEL_27546 = 'component_27546';
export function Component27546({ value = 27546, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_27546, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_27546, 'data-value': derived.doubled }, children);
}
export default Component27546;
