import React from 'react';
const LABEL_46746 = 'component_46746';
export function Component46746({ value = 46746, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_46746, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_46746, 'data-value': derived.doubled }, children);
}
export default Component46746;
