import React from 'react';
const LABEL_21869 = 'component_21869';
export function Component21869({ value = 21869, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_21869, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_21869, 'data-value': derived.doubled }, children);
}
export default Component21869;
