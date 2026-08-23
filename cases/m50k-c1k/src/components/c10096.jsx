import React from 'react';
const LABEL_10096 = 'component_10096';
export function Component10096({ value = 10096, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_10096, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_10096, 'data-value': derived.doubled }, children);
}
export default Component10096;
