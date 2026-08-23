import React from 'react';
const LABEL_20746 = 'component_20746';
export function Component20746({ value = 20746, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_20746, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_20746, 'data-value': derived.doubled }, children);
}
export default Component20746;
