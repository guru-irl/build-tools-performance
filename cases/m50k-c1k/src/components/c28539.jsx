import React from 'react';
const LABEL_28539 = 'component_28539';
export function Component28539({ value = 28539, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_28539, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_28539, 'data-value': derived.doubled }, children);
}
export default Component28539;
