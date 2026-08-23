import React from 'react';
const LABEL_27308 = 'component_27308';
export function Component27308({ value = 27308, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_27308, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_27308, 'data-value': derived.doubled }, children);
}
export default Component27308;
