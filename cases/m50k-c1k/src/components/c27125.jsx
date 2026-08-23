import React from 'react';
const LABEL_27125 = 'component_27125';
export function Component27125({ value = 27125, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_27125, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_27125, 'data-value': derived.doubled }, children);
}
export default Component27125;
