import React from 'react';
const LABEL_24859 = 'component_24859';
export function Component24859({ value = 24859, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_24859, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_24859, 'data-value': derived.doubled }, children);
}
export default Component24859;
