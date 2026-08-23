import React from 'react';
const LABEL_2837 = 'component_2837';
export function Component2837({ value = 2837, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_2837, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_2837, 'data-value': derived.doubled }, children);
}
export default Component2837;
