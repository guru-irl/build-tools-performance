import React from 'react';
const LABEL_3357 = 'component_3357';
export function Component3357({ value = 3357, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_3357, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_3357, 'data-value': derived.doubled }, children);
}
export default Component3357;
