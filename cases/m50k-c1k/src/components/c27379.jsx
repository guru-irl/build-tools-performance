import React from 'react';
const LABEL_27379 = 'component_27379';
export function Component27379({ value = 27379, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_27379, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_27379, 'data-value': derived.doubled }, children);
}
export default Component27379;
