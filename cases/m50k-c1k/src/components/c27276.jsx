import React from 'react';
const LABEL_27276 = 'component_27276';
export function Component27276({ value = 27276, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_27276, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_27276, 'data-value': derived.doubled }, children);
}
export default Component27276;
