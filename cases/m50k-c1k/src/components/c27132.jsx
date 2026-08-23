import React from 'react';
const LABEL_27132 = 'component_27132';
export function Component27132({ value = 27132, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_27132, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_27132, 'data-value': derived.doubled }, children);
}
export default Component27132;
