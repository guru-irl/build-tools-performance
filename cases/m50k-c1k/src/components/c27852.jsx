import React from 'react';
const LABEL_27852 = 'component_27852';
export function Component27852({ value = 27852, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_27852, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_27852, 'data-value': derived.doubled }, children);
}
export default Component27852;
