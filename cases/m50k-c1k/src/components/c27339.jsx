import React from 'react';
const LABEL_27339 = 'component_27339';
export function Component27339({ value = 27339, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_27339, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_27339, 'data-value': derived.doubled }, children);
}
export default Component27339;
