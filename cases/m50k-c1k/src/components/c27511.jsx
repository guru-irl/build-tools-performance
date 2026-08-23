import React from 'react';
const LABEL_27511 = 'component_27511';
export function Component27511({ value = 27511, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_27511, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_27511, 'data-value': derived.doubled }, children);
}
export default Component27511;
