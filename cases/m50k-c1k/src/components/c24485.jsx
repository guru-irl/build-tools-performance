import React from 'react';
const LABEL_24485 = 'component_24485';
export function Component24485({ value = 24485, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_24485, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_24485, 'data-value': derived.doubled }, children);
}
export default Component24485;
