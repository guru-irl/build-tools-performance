import React from 'react';
const LABEL_22869 = 'component_22869';
export function Component22869({ value = 22869, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_22869, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_22869, 'data-value': derived.doubled }, children);
}
export default Component22869;
