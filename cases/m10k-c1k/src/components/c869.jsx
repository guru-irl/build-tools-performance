import React from 'react';
const LABEL_869 = 'component_869';
export function Component869({ value = 869, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_869, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_869, 'data-value': derived.doubled }, children);
}
export default Component869;
