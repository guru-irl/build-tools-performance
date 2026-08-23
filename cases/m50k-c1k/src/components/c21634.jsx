import React from 'react';
const LABEL_21634 = 'component_21634';
export function Component21634({ value = 21634, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_21634, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_21634, 'data-value': derived.doubled }, children);
}
export default Component21634;
