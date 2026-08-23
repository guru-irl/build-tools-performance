import React from 'react';
const LABEL_13506 = 'component_13506';
export function Component13506({ value = 13506, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_13506, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_13506, 'data-value': derived.doubled }, children);
}
export default Component13506;
