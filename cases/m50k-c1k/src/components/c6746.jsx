import React from 'react';
const LABEL_6746 = 'component_6746';
export function Component6746({ value = 6746, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_6746, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_6746, 'data-value': derived.doubled }, children);
}
export default Component6746;
