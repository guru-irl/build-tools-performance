import React from 'react';
const LABEL_33864 = 'component_33864';
export function Component33864({ value = 33864, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_33864, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_33864, 'data-value': derived.doubled }, children);
}
export default Component33864;
