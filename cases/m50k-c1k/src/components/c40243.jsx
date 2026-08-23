import React from 'react';
const LABEL_40243 = 'component_40243';
export function Component40243({ value = 40243, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_40243, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_40243, 'data-value': derived.doubled }, children);
}
export default Component40243;
