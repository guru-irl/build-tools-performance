import React from 'react';
const LABEL_2969 = 'component_2969';
export function Component2969({ value = 2969, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_2969, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_2969, 'data-value': derived.doubled }, children);
}
export default Component2969;
