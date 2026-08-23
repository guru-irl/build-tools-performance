import React from 'react';
const LABEL_2542 = 'component_2542';
export function Component2542({ value = 2542, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_2542, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_2542, 'data-value': derived.doubled }, children);
}
export default Component2542;
