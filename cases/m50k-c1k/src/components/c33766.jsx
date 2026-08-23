import React from 'react';
const LABEL_33766 = 'component_33766';
export function Component33766({ value = 33766, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_33766, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_33766, 'data-value': derived.doubled }, children);
}
export default Component33766;
