import React from 'react';
const LABEL_27487 = 'component_27487';
export function Component27487({ value = 27487, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_27487, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_27487, 'data-value': derived.doubled }, children);
}
export default Component27487;
