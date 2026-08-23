import React from 'react';
const LABEL_23746 = 'component_23746';
export function Component23746({ value = 23746, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_23746, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_23746, 'data-value': derived.doubled }, children);
}
export default Component23746;
