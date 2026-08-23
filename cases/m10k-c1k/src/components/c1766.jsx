import React from 'react';
const LABEL_1766 = 'component_1766';
export function Component1766({ value = 1766, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_1766, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_1766, 'data-value': derived.doubled }, children);
}
export default Component1766;
