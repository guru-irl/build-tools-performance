import React from 'react';
const LABEL_2551 = 'component_2551';
export function Component2551({ value = 2551, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_2551, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_2551, 'data-value': derived.doubled }, children);
}
export default Component2551;
