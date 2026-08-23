import React from 'react';
const LABEL_2434 = 'component_2434';
export function Component2434({ value = 2434, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_2434, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_2434, 'data-value': derived.doubled }, children);
}
export default Component2434;
