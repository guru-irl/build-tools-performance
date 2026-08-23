import React from 'react';
const LABEL_16859 = 'component_16859';
export function Component16859({ value = 16859, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_16859, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_16859, 'data-value': derived.doubled }, children);
}
export default Component16859;
