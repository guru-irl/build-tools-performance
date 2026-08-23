import React from 'react';
const LABEL_14048 = 'component_14048';
export function Component14048({ value = 14048, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_14048, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_14048, 'data-value': derived.doubled }, children);
}
export default Component14048;
