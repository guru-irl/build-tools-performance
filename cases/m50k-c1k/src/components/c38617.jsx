import React from 'react';
const LABEL_38617 = 'component_38617';
export function Component38617({ value = 38617, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_38617, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_38617, 'data-value': derived.doubled }, children);
}
export default Component38617;
