import React from 'react';
const LABEL_27007 = 'component_27007';
export function Component27007({ value = 27007, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_27007, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_27007, 'data-value': derived.doubled }, children);
}
export default Component27007;
