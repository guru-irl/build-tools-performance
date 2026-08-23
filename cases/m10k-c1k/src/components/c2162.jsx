import React from 'react';
const LABEL_2162 = 'component_2162';
export function Component2162({ value = 2162, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_2162, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_2162, 'data-value': derived.doubled }, children);
}
export default Component2162;
