import React from 'react';
const LABEL_27263 = 'component_27263';
export function Component27263({ value = 27263, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_27263, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_27263, 'data-value': derived.doubled }, children);
}
export default Component27263;
