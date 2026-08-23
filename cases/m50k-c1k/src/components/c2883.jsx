import React from 'react';
const LABEL_2883 = 'component_2883';
export function Component2883({ value = 2883, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_2883, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_2883, 'data-value': derived.doubled }, children);
}
export default Component2883;
