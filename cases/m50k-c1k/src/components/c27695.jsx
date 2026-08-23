import React from 'react';
const LABEL_27695 = 'component_27695';
export function Component27695({ value = 27695, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_27695, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_27695, 'data-value': derived.doubled }, children);
}
export default Component27695;
