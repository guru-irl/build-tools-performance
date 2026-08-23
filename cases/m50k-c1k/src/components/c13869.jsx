import React from 'react';
const LABEL_13869 = 'component_13869';
export function Component13869({ value = 13869, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_13869, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_13869, 'data-value': derived.doubled }, children);
}
export default Component13869;
