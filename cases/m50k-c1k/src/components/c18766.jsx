import React from 'react';
const LABEL_18766 = 'component_18766';
export function Component18766({ value = 18766, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_18766, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_18766, 'data-value': derived.doubled }, children);
}
export default Component18766;
