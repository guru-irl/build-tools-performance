import React from 'react';
const LABEL_20553 = 'component_20553';
export function Component20553({ value = 20553, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_20553, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_20553, 'data-value': derived.doubled }, children);
}
export default Component20553;
