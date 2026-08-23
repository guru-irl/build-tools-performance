import React from 'react';
const LABEL_2470 = 'component_2470';
export function Component2470({ value = 2470, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_2470, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_2470, 'data-value': derived.doubled }, children);
}
export default Component2470;
