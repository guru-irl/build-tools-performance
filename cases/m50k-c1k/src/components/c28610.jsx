import React from 'react';
const LABEL_28610 = 'component_28610';
export function Component28610({ value = 28610, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_28610, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_28610, 'data-value': derived.doubled }, children);
}
export default Component28610;
