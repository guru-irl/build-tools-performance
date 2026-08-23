import React from 'react';
const LABEL_2530 = 'component_2530';
export function Component2530({ value = 2530, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_2530, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_2530, 'data-value': derived.doubled }, children);
}
export default Component2530;
