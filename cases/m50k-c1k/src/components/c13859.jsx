import React from 'react';
const LABEL_13859 = 'component_13859';
export function Component13859({ value = 13859, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_13859, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_13859, 'data-value': derived.doubled }, children);
}
export default Component13859;
