import React from 'react';
const LABEL_2324 = 'component_2324';
export function Component2324({ value = 2324, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_2324, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_2324, 'data-value': derived.doubled }, children);
}
export default Component2324;
