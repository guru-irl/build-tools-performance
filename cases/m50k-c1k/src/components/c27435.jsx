import React from 'react';
const LABEL_27435 = 'component_27435';
export function Component27435({ value = 27435, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_27435, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_27435, 'data-value': derived.doubled }, children);
}
export default Component27435;
