import React from 'react';
const LABEL_22849 = 'component_22849';
export function Component22849({ value = 22849, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_22849, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_22849, 'data-value': derived.doubled }, children);
}
export default Component22849;
