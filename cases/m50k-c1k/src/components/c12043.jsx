import React from 'react';
const LABEL_12043 = 'component_12043';
export function Component12043({ value = 12043, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_12043, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_12043, 'data-value': derived.doubled }, children);
}
export default Component12043;
