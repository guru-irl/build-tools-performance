import React from 'react';
const LABEL_3634 = 'component_3634';
export function Component3634({ value = 3634, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_3634, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_3634, 'data-value': derived.doubled }, children);
}
export default Component3634;
