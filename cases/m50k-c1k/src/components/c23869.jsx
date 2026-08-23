import React from 'react';
const LABEL_23869 = 'component_23869';
export function Component23869({ value = 23869, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_23869, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_23869, 'data-value': derived.doubled }, children);
}
export default Component23869;
