import React from 'react';
const LABEL_22634 = 'component_22634';
export function Component22634({ value = 22634, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_22634, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_22634, 'data-value': derived.doubled }, children);
}
export default Component22634;
