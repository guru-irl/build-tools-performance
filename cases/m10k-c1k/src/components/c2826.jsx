import React from 'react';
const LABEL_2826 = 'component_2826';
export function Component2826({ value = 2826, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_2826, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_2826, 'data-value': derived.doubled }, children);
}
export default Component2826;
