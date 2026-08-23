import React from 'react';
const LABEL_38766 = 'component_38766';
export function Component38766({ value = 38766, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_38766, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_38766, 'data-value': derived.doubled }, children);
}
export default Component38766;
