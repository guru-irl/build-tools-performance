import React from 'react';
const LABEL_27212 = 'component_27212';
export function Component27212({ value = 27212, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_27212, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_27212, 'data-value': derived.doubled }, children);
}
export default Component27212;
