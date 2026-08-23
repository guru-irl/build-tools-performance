import React from 'react';
const LABEL_14913 = 'component_14913';
export function Component14913({ value = 14913, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_14913, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_14913, 'data-value': derived.doubled }, children);
}
export default Component14913;
