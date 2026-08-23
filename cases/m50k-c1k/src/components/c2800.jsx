import React from 'react';
const LABEL_2800 = 'component_2800';
export function Component2800({ value = 2800, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_2800, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_2800, 'data-value': derived.doubled }, children);
}
export default Component2800;
