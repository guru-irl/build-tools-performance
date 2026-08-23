import React from 'react';
const LABEL_27064 = 'component_27064';
export function Component27064({ value = 27064, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_27064, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_27064, 'data-value': derived.doubled }, children);
}
export default Component27064;
