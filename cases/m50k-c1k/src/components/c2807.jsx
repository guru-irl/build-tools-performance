import React from 'react';
const LABEL_2807 = 'component_2807';
export function Component2807({ value = 2807, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_2807, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_2807, 'data-value': derived.doubled }, children);
}
export default Component2807;
