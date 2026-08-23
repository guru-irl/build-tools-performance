import React from 'react';
const LABEL_27160 = 'component_27160';
export function Component27160({ value = 27160, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_27160, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_27160, 'data-value': derived.doubled }, children);
}
export default Component27160;
