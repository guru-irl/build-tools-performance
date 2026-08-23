import React from 'react';
const LABEL_22746 = 'component_22746';
export function Component22746({ value = 22746, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_22746, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_22746, 'data-value': derived.doubled }, children);
}
export default Component22746;
