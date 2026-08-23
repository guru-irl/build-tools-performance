import React from 'react';
const LABEL_35766 = 'component_35766';
export function Component35766({ value = 35766, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_35766, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_35766, 'data-value': derived.doubled }, children);
}
export default Component35766;
