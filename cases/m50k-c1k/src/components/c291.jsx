import React from 'react';
const LABEL_291 = 'component_291';
export function Component291({ value = 291, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_291, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_291, 'data-value': derived.doubled }, children);
}
export default Component291;
