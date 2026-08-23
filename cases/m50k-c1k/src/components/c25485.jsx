import React from 'react';
const LABEL_25485 = 'component_25485';
export function Component25485({ value = 25485, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_25485, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_25485, 'data-value': derived.doubled }, children);
}
export default Component25485;
