import React from 'react';
const LABEL_33856 = 'component_33856';
export function Component33856({ value = 33856, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_33856, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_33856, 'data-value': derived.doubled }, children);
}
export default Component33856;
