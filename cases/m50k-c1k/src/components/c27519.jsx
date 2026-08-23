import React from 'react';
const LABEL_27519 = 'component_27519';
export function Component27519({ value = 27519, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_27519, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_27519, 'data-value': derived.doubled }, children);
}
export default Component27519;
