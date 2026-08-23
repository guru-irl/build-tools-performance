import React from 'react';
const LABEL_8766 = 'component_8766';
export function Component8766({ value = 8766, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_8766, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_8766, 'data-value': derived.doubled }, children);
}
export default Component8766;
