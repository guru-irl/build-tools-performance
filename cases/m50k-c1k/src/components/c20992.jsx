import React from 'react';
const LABEL_20992 = 'component_20992';
export function Component20992({ value = 20992, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_20992, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_20992, 'data-value': derived.doubled }, children);
}
export default Component20992;
