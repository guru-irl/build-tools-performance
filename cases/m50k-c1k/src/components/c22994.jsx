import React from 'react';
const LABEL_22994 = 'component_22994';
export function Component22994({ value = 22994, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_22994, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_22994, 'data-value': derived.doubled }, children);
}
export default Component22994;
