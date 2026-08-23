import React from 'react';
const LABEL_8751 = 'component_8751';
export function Component8751({ value = 8751, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_8751, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_8751, 'data-value': derived.doubled }, children);
}
export default Component8751;
