import React from 'react';
const LABEL_14462 = 'component_14462';
export function Component14462({ value = 14462, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_14462, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_14462, 'data-value': derived.doubled }, children);
}
export default Component14462;
