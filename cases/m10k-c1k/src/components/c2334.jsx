import React from 'react';
const LABEL_2334 = 'component_2334';
export function Component2334({ value = 2334, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_2334, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_2334, 'data-value': derived.doubled }, children);
}
export default Component2334;
