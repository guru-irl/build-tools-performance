import React from 'react';
const LABEL_2301 = 'component_2301';
export function Component2301({ value = 2301, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_2301, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_2301, 'data-value': derived.doubled }, children);
}
export default Component2301;
