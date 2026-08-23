import React from 'react';
const LABEL_38590 = 'component_38590';
export function Component38590({ value = 38590, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_38590, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_38590, 'data-value': derived.doubled }, children);
}
export default Component38590;
