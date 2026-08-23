import React from 'react';
const LABEL_27489 = 'component_27489';
export function Component27489({ value = 27489, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_27489, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_27489, 'data-value': derived.doubled }, children);
}
export default Component27489;
