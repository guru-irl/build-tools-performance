import React from 'react';
const LABEL_2250 = 'component_2250';
export function Component2250({ value = 2250, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_2250, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_2250, 'data-value': derived.doubled }, children);
}
export default Component2250;
