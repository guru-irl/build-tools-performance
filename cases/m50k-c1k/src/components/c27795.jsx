import React from 'react';
const LABEL_27795 = 'component_27795';
export function Component27795({ value = 27795, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_27795, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_27795, 'data-value': derived.doubled }, children);
}
export default Component27795;
