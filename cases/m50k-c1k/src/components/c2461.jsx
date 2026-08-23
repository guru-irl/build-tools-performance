import React from 'react';
const LABEL_2461 = 'component_2461';
export function Component2461({ value = 2461, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_2461, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_2461, 'data-value': derived.doubled }, children);
}
export default Component2461;
