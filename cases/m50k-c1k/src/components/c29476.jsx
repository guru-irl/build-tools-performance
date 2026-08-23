import React from 'react';
const LABEL_29476 = 'component_29476';
export function Component29476({ value = 29476, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_29476, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_29476, 'data-value': derived.doubled }, children);
}
export default Component29476;
