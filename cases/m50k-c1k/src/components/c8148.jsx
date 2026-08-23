import React from 'react';
const LABEL_8148 = 'component_8148';
export function Component8148({ value = 8148, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_8148, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_8148, 'data-value': derived.doubled }, children);
}
export default Component8148;
