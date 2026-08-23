import React from 'react';
const LABEL_27610 = 'component_27610';
export function Component27610({ value = 27610, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_27610, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_27610, 'data-value': derived.doubled }, children);
}
export default Component27610;
