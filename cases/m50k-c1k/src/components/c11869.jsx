import React from 'react';
const LABEL_11869 = 'component_11869';
export function Component11869({ value = 11869, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_11869, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_11869, 'data-value': derived.doubled }, children);
}
export default Component11869;
