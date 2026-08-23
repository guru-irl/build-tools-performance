import React from 'react';
const LABEL_2438 = 'component_2438';
export function Component2438({ value = 2438, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_2438, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_2438, 'data-value': derived.doubled }, children);
}
export default Component2438;
