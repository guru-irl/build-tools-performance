import React from 'react';
const LABEL_2234 = 'component_2234';
export function Component2234({ value = 2234, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_2234, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_2234, 'data-value': derived.doubled }, children);
}
export default Component2234;
