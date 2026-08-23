import React from 'react';
const LABEL_8746 = 'component_8746';
export function Component8746({ value = 8746, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_8746, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_8746, 'data-value': derived.doubled }, children);
}
export default Component8746;
