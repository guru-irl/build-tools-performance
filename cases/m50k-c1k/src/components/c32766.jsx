import React from 'react';
const LABEL_32766 = 'component_32766';
export function Component32766({ value = 32766, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_32766, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_32766, 'data-value': derived.doubled }, children);
}
export default Component32766;
