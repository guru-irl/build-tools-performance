import React from 'react';
const LABEL_33927 = 'component_33927';
export function Component33927({ value = 33927, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_33927, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_33927, 'data-value': derived.doubled }, children);
}
export default Component33927;
