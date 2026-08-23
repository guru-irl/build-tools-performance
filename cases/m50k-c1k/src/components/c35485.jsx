import React from 'react';
const LABEL_35485 = 'component_35485';
export function Component35485({ value = 35485, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_35485, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_35485, 'data-value': derived.doubled }, children);
}
export default Component35485;
