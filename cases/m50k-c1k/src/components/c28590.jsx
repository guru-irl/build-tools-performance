import React from 'react';
const LABEL_28590 = 'component_28590';
export function Component28590({ value = 28590, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_28590, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_28590, 'data-value': derived.doubled }, children);
}
export default Component28590;
