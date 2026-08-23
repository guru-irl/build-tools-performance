import React from 'react';
const LABEL_29491 = 'component_29491';
export function Component29491({ value = 29491, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_29491, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_29491, 'data-value': derived.doubled }, children);
}
export default Component29491;
