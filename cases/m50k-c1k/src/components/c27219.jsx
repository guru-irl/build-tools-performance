import React from 'react';
const LABEL_27219 = 'component_27219';
export function Component27219({ value = 27219, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_27219, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_27219, 'data-value': derived.doubled }, children);
}
export default Component27219;
