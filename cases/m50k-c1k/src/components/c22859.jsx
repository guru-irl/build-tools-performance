import React from 'react';
const LABEL_22859 = 'component_22859';
export function Component22859({ value = 22859, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_22859, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_22859, 'data-value': derived.doubled }, children);
}
export default Component22859;
