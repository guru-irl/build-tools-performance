import React from 'react';
const LABEL_27803 = 'component_27803';
export function Component27803({ value = 27803, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_27803, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_27803, 'data-value': derived.doubled }, children);
}
export default Component27803;
