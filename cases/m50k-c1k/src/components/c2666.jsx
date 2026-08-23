import React from 'react';
const LABEL_2666 = 'component_2666';
export function Component2666({ value = 2666, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_2666, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_2666, 'data-value': derived.doubled }, children);
}
export default Component2666;
