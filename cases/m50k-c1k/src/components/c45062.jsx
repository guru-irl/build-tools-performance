import React from 'react';
const LABEL_45062 = 'component_45062';
export function Component45062({ value = 45062, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_45062, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_45062, 'data-value': derived.doubled }, children);
}
export default Component45062;
