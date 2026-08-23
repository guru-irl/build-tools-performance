import React from 'react';
const LABEL_2652 = 'component_2652';
export function Component2652({ value = 2652, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_2652, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_2652, 'data-value': derived.doubled }, children);
}
export default Component2652;
