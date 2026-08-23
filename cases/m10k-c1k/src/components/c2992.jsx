import React from 'react';
const LABEL_2992 = 'component_2992';
export function Component2992({ value = 2992, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_2992, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_2992, 'data-value': derived.doubled }, children);
}
export default Component2992;
