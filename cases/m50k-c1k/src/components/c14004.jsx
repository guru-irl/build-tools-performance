import React from 'react';
const LABEL_14004 = 'component_14004';
export function Component14004({ value = 14004, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_14004, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_14004, 'data-value': derived.doubled }, children);
}
export default Component14004;
