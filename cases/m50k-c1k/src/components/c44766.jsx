import React from 'react';
const LABEL_44766 = 'component_44766';
export function Component44766({ value = 44766, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_44766, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_44766, 'data-value': derived.doubled }, children);
}
export default Component44766;
