import React from 'react';
const LABEL_27720 = 'component_27720';
export function Component27720({ value = 27720, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_27720, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_27720, 'data-value': derived.doubled }, children);
}
export default Component27720;
