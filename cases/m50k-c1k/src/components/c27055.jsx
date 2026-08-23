import React from 'react';
const LABEL_27055 = 'component_27055';
export function Component27055({ value = 27055, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_27055, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_27055, 'data-value': derived.doubled }, children);
}
export default Component27055;
