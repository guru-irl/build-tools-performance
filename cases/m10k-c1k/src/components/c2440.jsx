import React from 'react';
const LABEL_2440 = 'component_2440';
export function Component2440({ value = 2440, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_2440, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_2440, 'data-value': derived.doubled }, children);
}
export default Component2440;
