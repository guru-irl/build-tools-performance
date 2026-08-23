import React from 'react';
const LABEL_21043 = 'component_21043';
export function Component21043({ value = 21043, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_21043, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_21043, 'data-value': derived.doubled }, children);
}
export default Component21043;
