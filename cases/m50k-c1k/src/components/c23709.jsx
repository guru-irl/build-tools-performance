import React from 'react';
const LABEL_23709 = 'component_23709';
export function Component23709({ value = 23709, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_23709, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_23709, 'data-value': derived.doubled }, children);
}
export default Component23709;
