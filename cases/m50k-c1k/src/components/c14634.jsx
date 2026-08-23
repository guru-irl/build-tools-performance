import React from 'react';
const LABEL_14634 = 'component_14634';
export function Component14634({ value = 14634, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_14634, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_14634, 'data-value': derived.doubled }, children);
}
export default Component14634;
