import React from 'react';
const LABEL_38746 = 'component_38746';
export function Component38746({ value = 38746, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_38746, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_38746, 'data-value': derived.doubled }, children);
}
export default Component38746;
