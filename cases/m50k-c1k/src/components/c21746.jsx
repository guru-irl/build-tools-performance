import React from 'react';
const LABEL_21746 = 'component_21746';
export function Component21746({ value = 21746, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_21746, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_21746, 'data-value': derived.doubled }, children);
}
export default Component21746;
