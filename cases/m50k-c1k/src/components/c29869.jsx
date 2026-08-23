import React from 'react';
const LABEL_29869 = 'component_29869';
export function Component29869({ value = 29869, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_29869, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_29869, 'data-value': derived.doubled }, children);
}
export default Component29869;
