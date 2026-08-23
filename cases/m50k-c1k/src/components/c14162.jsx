import React from 'react';
const LABEL_14162 = 'component_14162';
export function Component14162({ value = 14162, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_14162, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_14162, 'data-value': derived.doubled }, children);
}
export default Component14162;
