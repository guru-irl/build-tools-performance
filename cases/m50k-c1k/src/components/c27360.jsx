import React from 'react';
const LABEL_27360 = 'component_27360';
export function Component27360({ value = 27360, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_27360, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_27360, 'data-value': derived.doubled }, children);
}
export default Component27360;
