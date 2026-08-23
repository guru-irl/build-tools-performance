import React from 'react';
const LABEL_32927 = 'component_32927';
export function Component32927({ value = 32927, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_32927, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_32927, 'data-value': derived.doubled }, children);
}
export default Component32927;
