import React from 'react';
const LABEL_2275 = 'component_2275';
export function Component2275({ value = 2275, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_2275, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_2275, 'data-value': derived.doubled }, children);
}
export default Component2275;
