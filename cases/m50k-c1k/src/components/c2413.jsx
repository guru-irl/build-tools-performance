import React from 'react';
const LABEL_2413 = 'component_2413';
export function Component2413({ value = 2413, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_2413, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_2413, 'data-value': derived.doubled }, children);
}
export default Component2413;
