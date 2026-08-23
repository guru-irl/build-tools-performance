import React from 'react';
const LABEL_18590 = 'component_18590';
export function Component18590({ value = 18590, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_18590, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_18590, 'data-value': derived.doubled }, children);
}
export default Component18590;
