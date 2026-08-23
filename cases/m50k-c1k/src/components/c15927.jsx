import React from 'react';
const LABEL_15927 = 'component_15927';
export function Component15927({ value = 15927, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_15927, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_15927, 'data-value': derived.doubled }, children);
}
export default Component15927;
