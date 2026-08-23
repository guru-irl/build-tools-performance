import React from 'react';
const LABEL_27038 = 'component_27038';
export function Component27038({ value = 27038, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_27038, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_27038, 'data-value': derived.doubled }, children);
}
export default Component27038;
