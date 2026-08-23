import React from 'react';
const LABEL_27461 = 'component_27461';
export function Component27461({ value = 27461, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_27461, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_27461, 'data-value': derived.doubled }, children);
}
export default Component27461;
