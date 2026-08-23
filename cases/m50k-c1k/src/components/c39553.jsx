import React from 'react';
const LABEL_39553 = 'component_39553';
export function Component39553({ value = 39553, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_39553, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_39553, 'data-value': derived.doubled }, children);
}
export default Component39553;
