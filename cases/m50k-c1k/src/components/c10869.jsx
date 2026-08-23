import React from 'react';
const LABEL_10869 = 'component_10869';
export function Component10869({ value = 10869, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_10869, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_10869, 'data-value': derived.doubled }, children);
}
export default Component10869;
