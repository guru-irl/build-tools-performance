import React from 'react';
const LABEL_44869 = 'component_44869';
export function Component44869({ value = 44869, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_44869, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_44869, 'data-value': derived.doubled }, children);
}
export default Component44869;
