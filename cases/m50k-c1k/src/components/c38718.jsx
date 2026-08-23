import React from 'react';
const LABEL_38718 = 'component_38718';
export function Component38718({ value = 38718, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_38718, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_38718, 'data-value': derived.doubled }, children);
}
export default Component38718;
