import React from 'react';
const LABEL_22924 = 'component_22924';
export function Component22924({ value = 22924, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_22924, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_22924, 'data-value': derived.doubled }, children);
}
export default Component22924;
