import React from 'react';
const LABEL_14661 = 'component_14661';
export function Component14661({ value = 14661, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_14661, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_14661, 'data-value': derived.doubled }, children);
}
export default Component14661;
