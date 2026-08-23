import React from 'react';
const LABEL_22043 = 'component_22043';
export function Component22043({ value = 22043, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_22043, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_22043, 'data-value': derived.doubled }, children);
}
export default Component22043;
