import React from 'react';
const LABEL_2646 = 'component_2646';
export function Component2646({ value = 2646, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_2646, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_2646, 'data-value': derived.doubled }, children);
}
export default Component2646;
