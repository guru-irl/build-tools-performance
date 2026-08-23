import React from 'react';
const LABEL_6869 = 'component_6869';
export function Component6869({ value = 6869, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_6869, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_6869, 'data-value': derived.doubled }, children);
}
export default Component6869;
