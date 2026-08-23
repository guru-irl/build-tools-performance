import React from 'react';
const LABEL_21263 = 'component_21263';
export function Component21263({ value = 21263, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_21263, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_21263, 'data-value': derived.doubled }, children);
}
export default Component21263;
