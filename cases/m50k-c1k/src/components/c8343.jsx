import React from 'react';
const LABEL_8343 = 'component_8343';
export function Component8343({ value = 8343, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_8343, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_8343, 'data-value': derived.doubled }, children);
}
export default Component8343;
