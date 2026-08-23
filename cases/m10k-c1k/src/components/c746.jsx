import React from 'react';
const LABEL_746 = 'component_746';
export function Component746({ value = 746, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_746, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_746, 'data-value': derived.doubled }, children);
}
export default Component746;
