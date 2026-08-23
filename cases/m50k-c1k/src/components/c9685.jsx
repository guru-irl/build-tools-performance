import React from 'react';
const LABEL_9685 = 'component_9685';
export function Component9685({ value = 9685, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_9685, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_9685, 'data-value': derived.doubled }, children);
}
export default Component9685;
