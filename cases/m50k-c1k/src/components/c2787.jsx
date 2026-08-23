import React from 'react';
const LABEL_2787 = 'component_2787';
export function Component2787({ value = 2787, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_2787, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_2787, 'data-value': derived.doubled }, children);
}
export default Component2787;
