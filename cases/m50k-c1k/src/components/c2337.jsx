import React from 'react';
const LABEL_2337 = 'component_2337';
export function Component2337({ value = 2337, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_2337, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_2337, 'data-value': derived.doubled }, children);
}
export default Component2337;
