import React from 'react';
const LABEL_8062 = 'component_8062';
export function Component8062({ value = 8062, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_8062, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_8062, 'data-value': derived.doubled }, children);
}
export default Component8062;
