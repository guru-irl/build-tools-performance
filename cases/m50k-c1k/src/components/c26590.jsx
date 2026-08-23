import React from 'react';
const LABEL_26590 = 'component_26590';
export function Component26590({ value = 26590, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_26590, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_26590, 'data-value': derived.doubled }, children);
}
export default Component26590;
