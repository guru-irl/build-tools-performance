import React from 'react';
const LABEL_36213 = 'component_36213';
export function Component36213({ value = 36213, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_36213, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_36213, 'data-value': derived.doubled }, children);
}
export default Component36213;
