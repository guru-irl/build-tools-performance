import React from 'react';
const LABEL_27801 = 'component_27801';
export function Component27801({ value = 27801, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_27801, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_27801, 'data-value': derived.doubled }, children);
}
export default Component27801;
