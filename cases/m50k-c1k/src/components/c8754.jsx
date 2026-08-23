import React from 'react';
const LABEL_8754 = 'component_8754';
export function Component8754({ value = 8754, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_8754, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_8754, 'data-value': derived.doubled }, children);
}
export default Component8754;
