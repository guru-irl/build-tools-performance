import React from 'react';
const LABEL_12766 = 'component_12766';
export function Component12766({ value = 12766, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_12766, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_12766, 'data-value': derived.doubled }, children);
}
export default Component12766;
