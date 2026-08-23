import React from 'react';
const LABEL_27606 = 'component_27606';
export function Component27606({ value = 27606, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_27606, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_27606, 'data-value': derived.doubled }, children);
}
export default Component27606;
