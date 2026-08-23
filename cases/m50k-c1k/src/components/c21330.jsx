import React from 'react';
const LABEL_21330 = 'component_21330';
export function Component21330({ value = 21330, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_21330, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_21330, 'data-value': derived.doubled }, children);
}
export default Component21330;
