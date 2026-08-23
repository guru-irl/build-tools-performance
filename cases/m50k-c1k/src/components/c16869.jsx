import React from 'react';
const LABEL_16869 = 'component_16869';
export function Component16869({ value = 16869, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_16869, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_16869, 'data-value': derived.doubled }, children);
}
export default Component16869;
