import React from 'react';
const LABEL_27705 = 'component_27705';
export function Component27705({ value = 27705, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_27705, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_27705, 'data-value': derived.doubled }, children);
}
export default Component27705;
