import React from 'react';
const LABEL_8128 = 'component_8128';
export function Component8128({ value = 8128, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_8128, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_8128, 'data-value': derived.doubled }, children);
}
export default Component8128;
