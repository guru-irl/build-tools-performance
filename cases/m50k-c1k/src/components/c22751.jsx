import React from 'react';
const LABEL_22751 = 'component_22751';
export function Component22751({ value = 22751, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_22751, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_22751, 'data-value': derived.doubled }, children);
}
export default Component22751;
