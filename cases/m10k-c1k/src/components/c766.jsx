import React from 'react';
const LABEL_766 = 'component_766';
export function Component766({ value = 766, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_766, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_766, 'data-value': derived.doubled }, children);
}
export default Component766;
