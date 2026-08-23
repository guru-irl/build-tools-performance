import React from 'react';
const LABEL_2287 = 'component_2287';
export function Component2287({ value = 2287, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_2287, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_2287, 'data-value': derived.doubled }, children);
}
export default Component2287;
