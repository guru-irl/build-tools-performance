import React from 'react';
const LABEL_42869 = 'component_42869';
export function Component42869({ value = 42869, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_42869, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_42869, 'data-value': derived.doubled }, children);
}
export default Component42869;
