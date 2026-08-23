import React from 'react';
const LABEL_13324 = 'component_13324';
export function Component13324({ value = 13324, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_13324, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_13324, 'data-value': derived.doubled }, children);
}
export default Component13324;
