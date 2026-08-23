import React from 'react';
const LABEL_22816 = 'component_22816';
export function Component22816({ value = 22816, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_22816, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_22816, 'data-value': derived.doubled }, children);
}
export default Component22816;
