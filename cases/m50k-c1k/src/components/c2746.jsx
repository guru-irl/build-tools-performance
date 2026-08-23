import React from 'react';
const LABEL_2746 = 'component_2746';
export function Component2746({ value = 2746, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_2746, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_2746, 'data-value': derived.doubled }, children);
}
export default Component2746;
