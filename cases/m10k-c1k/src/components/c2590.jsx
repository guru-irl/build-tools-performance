import React from 'react';
const LABEL_2590 = 'component_2590';
export function Component2590({ value = 2590, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_2590, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_2590, 'data-value': derived.doubled }, children);
}
export default Component2590;
