import React from 'react';
const LABEL_496 = 'component_496';
export function Component496({ value = 496, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_496, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_496, 'data-value': derived.doubled }, children);
}
export default Component496;
