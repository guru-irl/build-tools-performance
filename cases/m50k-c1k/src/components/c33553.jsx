import React from 'react';
const LABEL_33553 = 'component_33553';
export function Component33553({ value = 33553, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_33553, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_33553, 'data-value': derived.doubled }, children);
}
export default Component33553;
