import React from 'react';
const LABEL_2803 = 'component_2803';
export function Component2803({ value = 2803, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_2803, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_2803, 'data-value': derived.doubled }, children);
}
export default Component2803;
