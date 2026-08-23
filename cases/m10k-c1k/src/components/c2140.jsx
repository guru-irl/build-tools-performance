import React from 'react';
const LABEL_2140 = 'component_2140';
export function Component2140({ value = 2140, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_2140, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_2140, 'data-value': derived.doubled }, children);
}
export default Component2140;
