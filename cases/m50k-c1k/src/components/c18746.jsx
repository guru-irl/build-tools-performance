import React from 'react';
const LABEL_18746 = 'component_18746';
export function Component18746({ value = 18746, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_18746, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_18746, 'data-value': derived.doubled }, children);
}
export default Component18746;
