import React from 'react';
const LABEL_44746 = 'component_44746';
export function Component44746({ value = 44746, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_44746, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_44746, 'data-value': derived.doubled }, children);
}
export default Component44746;
