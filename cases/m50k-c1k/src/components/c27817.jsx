import React from 'react';
const LABEL_27817 = 'component_27817';
export function Component27817({ value = 27817, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_27817, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_27817, 'data-value': derived.doubled }, children);
}
export default Component27817;
