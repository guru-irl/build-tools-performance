import React from 'react';
const LABEL_27149 = 'component_27149';
export function Component27149({ value = 27149, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_27149, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_27149, 'data-value': derived.doubled }, children);
}
export default Component27149;
