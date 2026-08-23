import React from 'react';
const LABEL_25590 = 'component_25590';
export function Component25590({ value = 25590, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_25590, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_25590, 'data-value': derived.doubled }, children);
}
export default Component25590;
