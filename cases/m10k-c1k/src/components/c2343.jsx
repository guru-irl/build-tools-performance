import React from 'react';
const LABEL_2343 = 'component_2343';
export function Component2343({ value = 2343, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_2343, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_2343, 'data-value': derived.doubled }, children);
}
export default Component2343;
