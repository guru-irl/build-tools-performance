import React from 'react';
const LABEL_2765 = 'component_2765';
export function Component2765({ value = 2765, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_2765, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_2765, 'data-value': derived.doubled }, children);
}
export default Component2765;
