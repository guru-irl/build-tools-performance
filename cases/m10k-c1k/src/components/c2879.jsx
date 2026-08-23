import React from 'react';
const LABEL_2879 = 'component_2879';
export function Component2879({ value = 2879, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_2879, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_2879, 'data-value': derived.doubled }, children);
}
export default Component2879;
