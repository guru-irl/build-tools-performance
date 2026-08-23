import React from 'react';
const LABEL_14746 = 'component_14746';
export function Component14746({ value = 14746, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_14746, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_14746, 'data-value': derived.doubled }, children);
}
export default Component14746;
