import React from 'react';
const LABEL_22927 = 'component_22927';
export function Component22927({ value = 22927, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_22927, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_22927, 'data-value': derived.doubled }, children);
}
export default Component22927;
