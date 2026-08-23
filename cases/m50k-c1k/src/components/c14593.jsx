import React from 'react';
const LABEL_14593 = 'component_14593';
export function Component14593({ value = 14593, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_14593, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_14593, 'data-value': derived.doubled }, children);
}
export default Component14593;
