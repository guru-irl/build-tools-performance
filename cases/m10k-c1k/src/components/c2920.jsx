import React from 'react';
const LABEL_2920 = 'component_2920';
export function Component2920({ value = 2920, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_2920, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_2920, 'data-value': derived.doubled }, children);
}
export default Component2920;
