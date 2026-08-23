import React from 'react';
const LABEL_40787 = 'component_40787';
export function Component40787({ value = 40787, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_40787, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_40787, 'data-value': derived.doubled }, children);
}
export default Component40787;
