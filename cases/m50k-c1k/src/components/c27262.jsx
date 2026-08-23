import React from 'react';
const LABEL_27262 = 'component_27262';
export function Component27262({ value = 27262, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_27262, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_27262, 'data-value': derived.doubled }, children);
}
export default Component27262;
