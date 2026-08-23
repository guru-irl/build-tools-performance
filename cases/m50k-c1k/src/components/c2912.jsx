import React from 'react';
const LABEL_2912 = 'component_2912';
export function Component2912({ value = 2912, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_2912, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_2912, 'data-value': derived.doubled }, children);
}
export default Component2912;
