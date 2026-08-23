import React from 'react';
const LABEL_19746 = 'component_19746';
export function Component19746({ value = 19746, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_19746, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_19746, 'data-value': derived.doubled }, children);
}
export default Component19746;
