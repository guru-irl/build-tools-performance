import React from 'react';
const LABEL_27624 = 'component_27624';
export function Component27624({ value = 27624, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_27624, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_27624, 'data-value': derived.doubled }, children);
}
export default Component27624;
