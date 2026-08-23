import React from 'react';
const LABEL_15434 = 'component_15434';
export function Component15434({ value = 15434, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_15434, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_15434, 'data-value': derived.doubled }, children);
}
export default Component15434;
