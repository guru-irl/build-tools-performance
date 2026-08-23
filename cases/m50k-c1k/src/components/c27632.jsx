import React from 'react';
const LABEL_27632 = 'component_27632';
export function Component27632({ value = 27632, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_27632, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_27632, 'data-value': derived.doubled }, children);
}
export default Component27632;
