import React from 'react';
const LABEL_2246 = 'component_2246';
export function Component2246({ value = 2246, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_2246, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_2246, 'data-value': derived.doubled }, children);
}
export default Component2246;
