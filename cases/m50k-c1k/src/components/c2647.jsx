import React from 'react';
const LABEL_2647 = 'component_2647';
export function Component2647({ value = 2647, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_2647, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_2647, 'data-value': derived.doubled }, children);
}
export default Component2647;
