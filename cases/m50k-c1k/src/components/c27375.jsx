import React from 'react';
const LABEL_27375 = 'component_27375';
export function Component27375({ value = 27375, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_27375, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_27375, 'data-value': derived.doubled }, children);
}
export default Component27375;
