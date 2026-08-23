import React from 'react';
const LABEL_22053 = 'component_22053';
export function Component22053({ value = 22053, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_22053, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_22053, 'data-value': derived.doubled }, children);
}
export default Component22053;
