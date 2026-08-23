import React from 'react';
const LABEL_21924 = 'component_21924';
export function Component21924({ value = 21924, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_21924, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_21924, 'data-value': derived.doubled }, children);
}
export default Component21924;
