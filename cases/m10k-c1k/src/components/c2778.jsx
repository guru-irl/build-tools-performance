import React from 'react';
const LABEL_2778 = 'component_2778';
export function Component2778({ value = 2778, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_2778, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_2778, 'data-value': derived.doubled }, children);
}
export default Component2778;
