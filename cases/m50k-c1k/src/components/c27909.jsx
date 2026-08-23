import React from 'react';
const LABEL_27909 = 'component_27909';
export function Component27909({ value = 27909, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_27909, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_27909, 'data-value': derived.doubled }, children);
}
export default Component27909;
