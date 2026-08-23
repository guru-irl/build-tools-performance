import React from 'react';
const LABEL_11634 = 'component_11634';
export function Component11634({ value = 11634, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_11634, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_11634, 'data-value': derived.doubled }, children);
}
export default Component11634;
