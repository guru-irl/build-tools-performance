import React from 'react';
const LABEL_11590 = 'component_11590';
export function Component11590({ value = 11590, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_11590, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_11590, 'data-value': derived.doubled }, children);
}
export default Component11590;
